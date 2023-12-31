import { Parallax } from 'react-parallax';

const Cover = ({img, title, brief }) => {
    return (
        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
        >
        <div className="hero h-[600px]">
            <div className="hero-overlay bg-opacity-60">
            </div>
            <div className="hero-content text-center text-neutral-content md:px-56 md:py-20 bg-black bg-opacity-40">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                    <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum in, labor porro itaque corrupti odit doloribus.</p>
                </div>
            </div>
        </div>
    </Parallax>
        
    );
};

export default Cover;