import Image from "next/image";
import kamrul from '../../assets/images/kamrul.jpg'

const AboutPage = () => {
    return (
        <div>
            <h2>This is about page</h2>
            <Image
                src="https://images.unsplash.com/photo-1762983870490-63e5ba07105b"
                alt="desktop pic"
                width="500"
                height="300"
            />
            <Image
                src="https://i.ibb.co.com/TBPctwZh/tanvir1.jpg"
                alt="tanvir pic"
                width="500"
                height="300"
            />
            <Image
                src="/al-amin_imp.png"
                alt="al-amin img"
                width="500"
                height="300"
            />
            <Image
                src={kamrul}
                alt="kamrul dr"
                height={300}
                width={500}
            />

        </div>
    );
};

export default AboutPage;