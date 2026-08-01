import type { IconType } from "react-icons";

type ServiceProps = {

icon:IconType;

title:string;

description:string;

};

function ServiceCard({

icon:Icon,

title,

description

}:ServiceProps){

return(

<div className="service-card">

<Icon className="service-icon"/>

<h2>{title}</h2>

<p>{description}</p>

</div>

);

}

export default ServiceCard;