import React, { useState, useMemo, useEffect } from "react";
import "./SlotPickerModal.css";
import api from "../../services/api";

function toKey(d) {
  // Use local date components to avoid UTC timezone shifts from toISOString
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}   

function addMonths(date, n) {
  return new Date(date.getFullYear(), date.getMonth() + n, 1);
}

function formatMonthYear(date) {
  return date.toLocaleDateString(undefined, {
    month: "long",
    year: "numeric",
  });
}

const SlotPickerModal = ({ isOpen, onClose, onSelectSlot }) => {
  const today = useMemo(() => {
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    return t;
  }, []);

  const [currentMonthStart, setCurrentMonthStart] = useState(
    startOfMonth(today)
  );
  const [unavailableMap, setUnavailableMap] = useState({});
  const [loading, setLoading] = useState(false);

  // ✅ Hooks must always run — DO NOT place after return
  useEffect(() => {
    if (!isOpen) return;

    let mounted = true;
    const month = currentMonthStart.getMonth() + 1;
    const year = currentMonthStart.getFullYear();

    async function fetchMonth() {
      setLoading(true);
      try {
        const url = `/v1/consultationDateUserMapper/getSessionsByCalender?month=${month}&year=${year}`;
        const res = await api.get(url);

        const items = res?.data?.data || [];
        const map = {};

        items.forEach((it) => {
          const day = String(it.date).padStart(2, "0");
          const key = `${year}-${String(month).padStart(2, "0")}-${day}`;

          if (it.consultationIsThere) {
            map[key] = true;
          }
        });

        if (mounted) setUnavailableMap(map);
      } catch (err) {
        console.error("Error fetching month availability", err);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchMonth();
    return () => {
      mounted = false;
    };
  }, [currentMonthStart, isOpen]);

  // Build 6x7 grid
  const firstDayOfMonth = startOfMonth(currentMonthStart);
  const startGrid = new Date(firstDayOfMonth);
  startGrid.setDate(1 - startGrid.getDay());

  const grid = [];
  for (let i = 0; i < 42; i++) {
    const d = new Date(startGrid);
    d.setDate(startGrid.getDate() + i);
    grid.push(d);
  }

  const getStatus = (d) => {
    const key = toKey(d);

    // ✅ Sunday disabled
    if (d.getDay() === 0) return "not-available";

    if (d < today) return "past";

    if (unavailableMap[key]) return "not-available";

    return "available";
  };

  const handleDayClick = (d) => {
    if (getStatus(d) === "available") {
      const key = toKey(d);
      onSelectSlot?.(key);
      onClose?.();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="spm_overlay" onClick={onClose}>
      <div
        className="spm_modal spm_calendar_modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="spm_header">
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button
              className="spm_nav"
              onClick={() =>
                setCurrentMonthStart((m) => addMonths(m, -1))
              }
            >
              &lt;
            </button>

            <div className="spm_month_title">
              {formatMonthYear(currentMonthStart)}
            </div>

            <button
              className="spm_nav"
              onClick={() =>
                setCurrentMonthStart((m) => addMonths(m, 1))
              }
            >
              &gt;
            </button>
          </div>

          <button className="spm_close_x" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Calendar */}
        <div className="spm_calendar_grid">
          <div className="spm_weekdays">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
              (w) => (
                <div key={w} className="spm_weekday">
                  {w}
                </div>
              )
            )}
          </div>

          <div className="spm_days">
            {grid.map((d) => {
              const key = toKey(d);
              const inMonth = d.getMonth() === currentMonthStart.getMonth();
              const status = getStatus(d);

              return (
                <div
                  key={key}
                  className={`spm_day_cell ${inMonth ? 'in-month' : 'other-month'}`}
                  onClick={() => { if (inMonth) handleDayClick(d) }}
                >
                  <div
                    className={`spm_day_circle ${status} ${inMonth ? "in-month" : ""}`}
                  >
                    {inMonth ? d.getDate() : ''}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {loading && (
          <div style={{ textAlign: "center", padding: 10 }}>
            Loading...
          </div>
        )}

        {/* Legend */}
        <div className="spm_legend">
          <div>
            <span className="legend_dot available" /> Available
          </div>
          <div>
            <span className="legend_dot not-available" /> Not Available
          </div>
          <div>
            <span className="legend_dot past" /> Previous Date
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlotPickerModal;
