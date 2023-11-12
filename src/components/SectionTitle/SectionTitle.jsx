

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-3/12 mx-auto text-center md:my-6">
            <p className="text-amber-500 md:my-2">---{subHeading}---</p>
            <h2 className="md:text-4xl uppercase border-y-4 md:py-4">{heading}</h2>
        </div>
    );
};

export default SectionTitle;