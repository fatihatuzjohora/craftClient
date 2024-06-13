
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";
AOS.init();

const ArtCraft = () => {
    return (
        <div>
            
            <h1   className="text-4xl font-bold text-center mt-5"><Typewriter
            words={['Art & Craft House',]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /></h1>
            <div>
            <section className="p-4 lg:p-8">
	<div className="container mx-auto space-y-12">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img data-aos='zoom-in' data-aos-duration='1700' src="https://i.ibb.co/5Tt119f/images-4.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6">
				
				<h3 className="text-3xl font-bold">Lines and Colors </h3>
				<p className="my-6 ">This blog features reviews and articles about painting, drawing, sketching, comics, and other visual arts. It often highlights both contemporary artists and historical figures.</p>
			
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img data-aos='zoom-in' data-aos-duration='1900' src="https://i.ibb.co/kJhc3wT/images-5.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6">
			
				<h3 className="text-3xl font-bold">EmptyEasel </h3>
				<p className="my-6 "> EmptyEasel is a comprehensive resource for artists, offering tutorials, tips, and advice on various painting and drawing techniques. It also features artist interviews and product reviews.</p>
				
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img data-aos='zoom-in' data-aos-duration='2100' src="https://i.ibb.co/Ln6LvsS/images.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6">
				
				<h3 className="text-3xl font-bold">Drawspace</h3>
				<p className="my-6 ">Drawspace offers drawing lessons and tutorials for artists of all skill levels. The blog covers topics such as figure drawing, perspective, composition, and more.</p>
				
			</div>
		</div>
	</div>
</section>
            </div>
        </div>
    );
};

export default ArtCraft;