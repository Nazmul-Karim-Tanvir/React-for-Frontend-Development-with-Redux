import React,{ useState} from 'react';
import useFirestore from '../firebase/useFirestore';
// import { faHeart as fasFaHeart} from "@fortawesome/free-solid-svg-icons";
// import { faHeart as farFaHeart} from "@fortawesome/free-regular-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ImageGrid = ({setselectedImg}) => {
//     const [heart, setHeart] = useState(farFaHeart);
    const {docs} = useFirestore('images');
    console.log(docs);

    // const changeColor = (e) => {
    //     if (heart==farFaHeart) {
    //         setHeart(fasFaHeart);
    //     }else{
    //         setHeart(farFaHeart)
    //     }
    // }

    return(
        <div className="img-grid">
            {docs && docs.map(doc =>(
                <div className="img-wrap" key={doc.id}>
                    <img onClick={() => setselectedImg(doc.url)} src={doc.url} alt="uploaded pic"></img>
                    <br></br>
                    {/* <div>
                        <FontAwesomeIcon
                            className="like" 
                            onClick={() => {
                                changeColor();
                            }}
                            icon={heart} style={{color: 'red'}}/>
                    </div> */}
                </div>
            ))}
        </div>
    )
}
export default ImageGrid;