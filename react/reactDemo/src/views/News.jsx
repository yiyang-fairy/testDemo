import Swiper from '../component/Swiper.jsx';
export default function News() {
    const colors = ["https://unsplash.it/414/180/?random","http://placekitten.com/414/180/?random","https://unsplash.it/414/180/?random","http://temp.im/414x180/333/EEE"];
    return (
        <div>
            <Swiper imgs={colors}></Swiper>
        </div>
    )
}