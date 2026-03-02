import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GemstoneSublist from "../components/GemstoneSubList";
import api from "../services/api";
import { toast } from "react-toastify";
export default function GemstoneSubListPage() {
  const [loading, setLoading] = useState(true);
  const [gemstoneSubList, setGemstoneSubList] = useState([]);
  const [categoryName, setCategoryName] = useState("Gemstone Collection");
  const navigate = useNavigate();

  useEffect(() => {
    const categoryId = localStorage.getItem("selectedGemCategoryId");
    const storedName = localStorage.getItem("selectedGemCategoryName");
    if (storedName) {
      setCategoryName(storedName);
    }
    if (!categoryId) {
      toast.error("No category selected");
      navigate("/#gemstones");
    }
    const fetchGemstones = async () => {
      setLoading(true);
      try {
        const response = await api.get(
          `gemstone/getGemstoneListByCategoryId?gemstoneCategoryId=${categoryId}&pageSize=50&pageNo=1`,
        );
        console.log("subscat", response.data?.data);
        setGemstoneSubList(response.data?.data || []);
      } catch (error) {
        toast.error("Failed to load gemstones");
      } finally {
        setLoading(false);
      }
    };
    fetchGemstones();
  }, [navigate]);
  return (
    <>
      <section>
        <div className="consultation_list_section gemstones_main_section space_sec b_space_top">
          <div className="container">
            <div className="heading_sec">
              <h3 className="mrn_clr mb-0">{categoryName}</h3>
            </div>
            <div className="row">
              <GemstoneSublist gemstones={gemstoneSubList} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
