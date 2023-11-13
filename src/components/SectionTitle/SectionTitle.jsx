

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center md:my-6">
            <p className="text-amber-500 md:my-2">---{subHeading}---</p>
            <h2 className="md:text-3xl md:font-semibold uppercase border-y-4 md:py-4">{heading}</h2>
        </div>
    );
};

export default SectionTitle;