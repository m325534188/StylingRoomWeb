
import img1 from "../../images/אקססוריז בית.png";
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
import img14 from "../../images/אגרטל פרחים מקושט.webp"
import img15 from "../../images/אגרטל אייס.webp";
import img16 from "../../images/דיאנה זוהר.jpg";
import img17 from "../../images/דקורציה אקספלור.webp";
import img18 from "../../images/כוס נצרים דקורטיבית לבית.webp";





const initialState = [
    { id: 1, name: "אקססוריז בית", qty: 50,qtyCart:0, image: img1, price: 70, description: "אקססוריז בית" },
    { id: 2, name: "מפיץ ריח", qty: 50,qtyCart:0, image: img2, price: 70, description: "מוצרי אווירה פיור מאסק" },
    { id: 3, name: "ק. אחסון פאן", qty: 50,qtyCart:0, image: img3, price: 56, description: "קופסת אחסון לחדר הילדים" },
    { id: 4, name: "סט אמבטיה", qty: 50,qtyCart:0, image: img4, price: 85, description: "סדרת אביזרי אמבטיה ג'ווה" },
    { id: 5, name: "אגרטל יפיפה", qty: 50,qtyCart:0, image: img5, price: 170, description: "אגרטל פרחים מזכוכית" },
    { id: 6, name: "אגרטל פרחים דקורטיבי עגול ", qty: 120,qtyCart:0, image: img6, price: 70, description: "זוג אגרטלים זכוכית דקורטיבית, יוקרתי במיחד" },
    { id: 7, name: "שטיח יוקרתי ", qty: 74,qtyCart:0, image: img7, price: 70, description: "שטיח יוקרתי, פרוותי, ידידותי לילדים." },
    { id: 8, name: "כריות לבנות", qty: 35,qtyCart:0, image: img8, price: 35, description: "כיסויי כרית יוקרתיים פסים רכים לחדר ספה, לבן שמנת" },
    { id: 9, name: "אגרטל ניצן פרחים חווה", qty: 87,qtyCart:0, image: img9, price: 54, description: "אגרטל פרחים זכוכית עם כיסוי קש" },
    { id: 10, name: "יחידות מגש ", qty: 54,qtyCart:0, image: img10, price: 70, description: "יחידות מגש אחסון עלי גינקו, קישוט זהב אמנותי" },
    { id: 11, name: "קרמיקה אבסטרקטית יצירתית", qty: 98,qtyCart:0, image: img11, price: 98, description: " קרמיקה אבסטרקטית יצירתית, עיצוב ייחודי" },
    { id: 12, name: "אגרטלים לקישוט הבית שחור לבן", qty: 100,qtyCart:0, image: img12, price: 78, description: "אגרטלים לקישוט הבית, שילוב גדול ובינוני" },
    { id: 13, name: " עציץ מלכותי", qty: 50,qtyCart:0, image: img13, price: 150, description: "אגרטל מלאכותי עם עיצובי תאורה" },
    { id: 14, name: "עיצוב בצבעי שחור לבן", qty: 50,qtyCart:0, image: img14, price: 150, description: "קישוטי סלון מפוארים, עיצוב ייחודי" },
    { id: 15, name: " אגרטל אייס" ,qty: 50,qtyCart:0, image: img15, price: 150, description: "קישוט שולחן, עיצוב ייחודי, מוסיף אוירה" },
    // { id: 16, name: " דיאנה זוהר", qty: 50,qtyCart:0, image: img16, price: 150, description: "קישוט שולחן, עיצוב ייחודי" },
    // { id: 17, name: " דקורציה אקספלור", qty: 50,qtyCart:0, image: img17, price: 150, description: "קישוט שולחן, עיצוב ייחודי" },
    // { id: 18, name: "כוס נצרים דקורטיבית לבית", qty: 50,qtyCart:0, image: img18, price: 150, description: "קישוט שולחן, עיצוב ייחודי" }
    
]

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DECREASE_QTY":
            const newProducts = [...state]
            newProducts[action.index].qty--
            return newProducts
        case "ADD_QTY":
            // const newProducts2 = [...state]
            state[action.id].qty++
            return state
        default:
            return state
    }
}
export default productsReducer