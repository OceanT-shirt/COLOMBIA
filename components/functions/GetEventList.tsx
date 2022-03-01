import {EventListView} from "../molecules/ListButton";
import {EventsSample} from "../../sample_data/SampleData";


export const EventList = () => {
    return (
        <EventListView infoArray={EventsSample} />
    )
}