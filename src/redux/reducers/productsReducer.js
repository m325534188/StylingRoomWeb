
import img2 from "../../images/10.jpg";
import img3 from "../../images/11.jpg";
import img4 from "../../images/12.webp";
import img5 from "../../images/2.webp";
import img6 from "../../images/3.webp";
import img7 from "../../images/4.webp";
import img8 from "../../images/5.webp";
import img9 from "../../images/6.webp";
import img10 from "../../images/7.webp";
import img11 from "../../images/8.webp";
import img12 from "../../images/9.webp";
import img13 from "../../images/shopping.webp";
import img14 from "../../images/tdryk kci tsuo.png"
import img15 from "../../images/אגרטל אייס.webp";

const initialState = [
    
    {id: 2,name: "מפיץ ריח",qty: 50, image:img2,price: 70,description: "מוצרי אווירה פיור מאסק" },
    {id: 3,name: "ק. אחסון פאן",qty: 50, image:img3,price: 56,description: "gfh" },
    {id: 4,name: "סט אמבטיה",qty: 50, image:img4,price: 85,description: "סדרת אביזרי אמבטיה ג'ווה" },
    {id: 5,name: "אגרטל יפיפה",qty: 50, image:img5,price: 170,description: "אגרטל פרחים מזכוכית" },
    {id: 6,name: "אגרטל פרחים דקורטיבי עגול ",qty: 120, image:img6,price: 70,description: "אגרטל פרחים מזכוכית עם כיסוי קש" },
    {id: 7,name: "שטיח יוקרתי ",qty: 74, image:img7,price: 70,description: "שטיח יוקרתי, פרוותי, ידידותי לילדים." },
    {id: 8,name: "כריות לבנות",qty: 35, image:img8,price: 35,description: "כיסויי כרית יוקרתיים פסים רכים לחדר ספה, לבן שמנת" },
    {id: 9,name: "אגרטל ניצן פרחים חווה",qty: 87, image:img9,price: 54,description: "gfh" },
    {id: 10,name: "יחידות מגש ",qty: 54, image:img10,price: 70,description: "יחידות מגש אחסון עלי גינקו, קישוט זהב אמנותי, עבור מדף ספרים בית סלון עיצוב ארון משרד, עיצוב כניסה לשולחן" },
    {id: 11,name: "קרמיקה אבסטרקטית יצירתית",qty: 98, image:img11,price: 98,description: "קרמיקה אבסטרקטית יצירתית, עיצובי בית, קישוטי סלון מפוארים, עיצוב ייחודי, מתאים לארונות יין ולסלונים, מתנה לראש השנה ולפסח" },
    {id: 12,name: "אגרטלים לקישוט הבית שחור,לבן",qty: 100, image:img12,price: 78,description: "אגרטלים לקישוט הבית, שילוב גדול ובינוני קישוטי שולחן עבודה מקורה, שילוב פרחים סידור פרחים אגרטלים לטיפוח פרחים, עיצוב חדר אסתטי, עיצוב הבית" },
    {id: 13,name: " עציץ מלכותי",qty: 50, image:img13,price: 150,description: "קישוטי סלון מפוארים, עיצוב ייחודי" },
    {id: 13,name: " עציץ מלכותי",qty: 50, image:img14,price: 150,description: "קישוטי סלון מפוארים, עיצוב ייחודי" },
    {id: 13,name: " עציץ מלכותי",qty: 50, image:img15,price: 150,description: "קישוטי סלון מפוארים, עיצוב ייחודי" }
   
]
const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DECREASE_QTY":
            const newProducts = [...state]
            newProducts[action.index].qty--
            return newProducts
        case "ADD_QTY":
            const newProducts2 = [...state]
            newProducts[action.index].qty++
            return newProducts2
        default:
            return state
    }
}
export default productsReducer