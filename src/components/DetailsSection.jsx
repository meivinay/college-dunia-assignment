import { useContext } from "react";
import { CollegeContext } from "./CollegeCard";

let DetailsSection = (props) => {
  let college = useContext(CollegeContext);


  

  let LeftSection = (props) => {
    let CollegeName = (props) => (
      <span class="Hansraj-College-Delhi-University">
        {" "}
        {college.college_name}{" "}
      </span>
    );
    let Stars = (props) => (
      props.fill ? <span class="material-icons-outlined"> star </span> : <span class="material-icons-outlined"> star_border </span>
    );
    let Location = (props) => (
      <span class="Near-Vishwavidyalya-Metro-Station">
        {" "}
       {college.nearest_place[0]}{" "}
      </span>
    );
    let Distance = (props) => (
      <span class="-Kms-away-from-bus-stand"> {college.nearest_place[1]} </span>
    );
    let OtherDetails = (props) => {
      let nearest_Place = (college.famous_nearest_places).split("from");
      return (
      
        <span class="-Match-25kms-from-GTB-Nagar-7-Kms-from-Rajiv-Chowk">
          <span class="text-style-1">93% Match :</span>
          <span class="Text-Style-4">{nearest_Place[0]}</span>from {nearest_Place[1]}
          <span class="text-style-2">, from</span>
          <span class="Text-Style-4">{nearest_Place[2]} </span> 
        </span>
      );
    };

    let Offer = (props) => <div class="Rectangle-4">{college.offertext}</div>;

    return (
      <div className="Left-Section">
        <CollegeName />

{
       [...Array(5)].map((value,index)=>{
         console.log("rating",college.rating)
         if(index < college.rating )
        {
        return <Stars fill ={true}/>
        }
        else{
         return <Stars fill={false} />
        }
       })
}

        <div>
          <Location />
          <Distance />
        </div>
        <OtherDetails />
        <Offer />
      </div>
    );
  };

  let RightSection = (props) => {
    let OriginalFess = (props) => (
      <span style={{textDecoration: "line-through"}}>
        {" "}
        <span class="text-style-1" >₹</span>{college.original_fees}
      </span>
    );
    let Discount = (props) => <span className="discount"> {college.discount} </span>;
    let DiscountedFess = (props) => {
      return (
      <div class="discounted-fees"> 
          <span class="text-style-1">₹</span>{college.discounted_fees} </div>
          )}
    let FeesCycles = (props) => (
      <span class="Per-Semester-3months"> {college.fees_cycle}</span>
    );
    let Amenties = (props) => {
      return (
        <div className = "amenties">
          <span class="Free-Cancellation">{college.amenties[0]}</span>
          <span class="Free-Wi-Fi">{college.amenties[1]}</span>
        </div>
      );
    };
    return (
      <div className="Right-Section">
      <div style={{marginRight:"1rem"}}>
        <OriginalFess />
        <Discount />
      </div>
        <DiscountedFess />
        <FeesCycles />
        <Amenties />
      </div>
    );
  };
  return (
    <div className="Details-Section">
      <LeftSection /> <RightSection />
    </div>
  );
};
export default DetailsSection;
