interface PropType {
	className: string;
	children: JSX.Element;
}

const FocusedListItem = (data: PropType) => {
	return (
		<div className="group pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
			<div className="lg:hover:!opacity-100">
				<li className={data.className}>{data.children}</li>
			</div>
		</div>
	);
};

export default FocusedListItem;
