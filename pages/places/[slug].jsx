/*
 * Copyright (c) AzaChii and its affiliates. All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 *
 * Proprietary and confidential
 *
 * Written by Angel Mendez <hello@azachii.dev>, Jun 2020
 *
 * https://azachii.dev
 *
 * LICENSE file in the root directory of this source tree.
 */


import LayoutUnAuthenticated from "../../components/Layouts/Unauthenticated";
import PlacePresentation from "../../components/Places/Presentation";
import demo from '../../demo/index.json'
import dynamic from 'next/dynamic'
import {NextSeo} from "next-seo";
import GetImageUrl from "../../lib";

const ListAllProducts = dynamic(() => import('../../components/Places/ListAllProducts'))
const ContactForm = dynamic(() => import('../../components/Places/ContactForm'))

export default function PlacePage() {
	return (
		<LayoutUnAuthenticated
			pixel={"689265355254424"}
			moreSpaceInFooter
			withHeader={false}
			head={{
				theme: "#000"
			}}
		>
			<NextSeo
				title={"Moose en Waydda"}
				description={"Menú digital de Moose en Waydda"}
				facebook={{
					appId: "641527279645625"
				}}
				canonical={`https://waydda.vercel.app/places/demo`}
				additionalMetaTags={[
					{
						property: "restaurant:menu",
						content: "https://waydda.vercel.app/places/demo"
					},
					{
						property: "restaurant:contact_info:website",
						content: "https://waydda.vercel.app/places/demo"
					},
					{
						property: "restaurant:contact_info:street_address",
						content: "Av. Instituto Politécnico Nacional"
					},
					{
						property: "restaurant:contact_info:locality",
						content: "Ciudad de México"
					},
					{
						property: "restaurant:contact_info:region",
						content: "mexico"
					},
					{
						property: "restaurant:contact_info:postal_code",
						content: "00810"
					},
					{
						property: "restaurant:contact_info:country_name",
						content: "Mexico"
					}
				]}
				openGraph={{
					type: 'restaurant.restaurant',
					url: 'https://waydda.vercel.app/places/demo',
					title: "Moose en Waydda",
					description: "Menú digital de Moose en Waydda",
					site_name: "Waydda",
					images: [
						{
							url: GetImageUrl({publicId: "cover_500.png"}),
							alt: "Moose cover image",
						}
					]
				}}
			/>
			<PlacePresentation
				data={{...demo}}
			>
				<ListAllProducts data={demo.food}/>
				<ContactForm/>
			</PlacePresentation>
		</LayoutUnAuthenticated>
	)
}