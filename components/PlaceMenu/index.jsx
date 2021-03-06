/*
 *  Copyright (c) AzaChii and its affiliates. All Rights Reserved.
 *
 *  Unauthorized copying of this file, via any medium is strictly prohibited
 *
 *  Proprietary and confidential
 *
 *  Written by AzaChii <hello@azachii.dev>, July 2020
 *
 *  https://azachii.dev/
 *
 *  LICENSE file in the root directory of this source tree.
 */

import {Link} from 'react-scroll';
// import {useState} from "react";

export default function PlaceMenu({handleSendItem, items}) {
	const onHandleChange = (e) => {
		handleSendItem(e);
	}
	
	return (
		<div className="flex flex-grow overflow-x-scroll no_scrollbar border-b border-gray-400">
			{items.map((item, i) => {
				if (item.products.length > 0) {
					return (
						<MenuItem
							key={i}
							handleChange={onHandleChange}
							keyValue={encodeURI(item.name.toLowerCase())}
							label={item.name}
						/>
					)
				} else {
					return null;
				}
			})}
		</div>
	)
}

const MenuItem = ({label, keyValue, handleChange}) => {
	// const [active, setActive] = useState(false);
	
	return (
		<Link
			style={{
				flex: "0 0 auto"
			}}
			className={`py-4 flex mr-5 md:py-6 md:mr-8 text-center z-20`}
			activeClass="border-black border-b-2 z-20"
			to={keyValue}
			spy={true}
			smooth={true}
			offset={-50}
			onSetInactive={() => {
				handleChange("")
				// setActive(false);
			}}
			onSetActive={() => {
				handleChange(keyValue)
				// setActive(true);
			}}
		>
			<span className="select-none text-sm uppercase cursor-pointer text-black">
				{label}
			</span>
		</Link>
	)
}
