interface PropType {
	title: string;
}

const Tag = ({ title }: PropType) => {
	return <span className="flex items-center rounded-full px-3 py-1 text-xs font-bold leading-5 bg-orange-400/10 text-orange-300 ">{title}</span>;
};

export default Tag;
