import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import * as fas  from "@fortawesome/free-solid-svg-icons";

export default function Popup({ pesan }) {
  return (
    <>
      <div className="popup-alert">
        <span className="leading-5">{pesan}</span>
        <Fa icon={fas.faCircleInfo} className="text-[1.2rem]"/>
      </div>
    </>
  )
}