import person from '../../../assets/images/priorities/person.png'
import SubFooter from '../../Shared/SubFooter';
import './Priorities.css'



import { useState } from "react";
import PriotiesHero from './PriotiesHero';
import PriotitesAccordian from './PriotitesAccordian';


// eslint-disable-next-line react/prop-types
const Priorities = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (
        <div >
            <PriotiesHero></PriotiesHero>

            <PriotitesAccordian></PriotitesAccordian>
            {/* <SubFooter></SubFooter> */}



        </div >
    );
};

export default Priorities;