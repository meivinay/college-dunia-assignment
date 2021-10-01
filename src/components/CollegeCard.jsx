import React from "react";
import DetailsSection from "./DetailsSection";
export const CollegeContext = React.createContext();

let CollegeCard = (props) => {
  let Rectangle2 = (props) => <div class="Rectangle-2">{props.tag}</div>;
  let Rectangle3 = (props) => <div class="Rectangle-3"><div>{props.rating}/5 </div>{props.remarks}</div>
  let Promoted = (props) => <div class="promoted"></div>
  let RankingContainer = (props) => (
    <span className="Ranking"> {props.ranking} </span>
  );
  let ImageSection = (props) => (
      <div class="Layer-10">
      {" "}
      <img src={props.url} alt={props.collegeName}></img>{" "}
      {props.college.promoted && <Promoted/>}    
      <Rectangle2 tag = {props.college.tags[0]}/> <DistanceContainer tag = {props.college.tags[1]} /> <RankingContainer ranking = {props.college.ranking} />{" "}
        <Rectangle3 rating ={props.college.rating} remarks = {props.college.rating_remarks} />
    </div>
  );
  let DistanceContainer = (props) => <div className="Distance-Container">{props.tag}</div>;
  return (
    <div class="Rectangle-1">
      <ImageSection
        url={
          "./college.png"
        }
        alt="My college"
        college = {props.details}
      ></ImageSection>
      <CollegeContext.Provider value={props.details}>
        <DetailsSection />
      </CollegeContext.Provider>
    </div>
  );
};

export default CollegeCard;
