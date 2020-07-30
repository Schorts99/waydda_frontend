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

// import ContactPlace from "../Contact";
// import ListAllProducts from "../ListAllProducts";
// import WhatsAppButton from "../../WhatsAppButton";

export default function GetPlaceData({data}) {
	return (
		<>
			<ListAllProducts data={data}/>
			{/*{whatsapp && <WhatsAppButton data={whatsapp}/>}*/}
			{/*<ContactPlace addressState={data.adressState} address={data.address}/>*/}
		</>
	)
}