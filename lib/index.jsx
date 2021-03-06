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

import {Base64} from 'js-base64';
import hexRgb from 'hex-rgb'

const GetImageUrl = ({publicId = "", width = 500, height = 500, fit = "outside", bgColor = null}) => {
	let params = {}
	if (bgColor) {
		const new_color = getColor(bgColor)
		params.background = {
			"r": new_color.red,
			"g": new_color.green,
			"b": new_color.blue,
			"alpha": 1
		}
	}
	let options = JSON.stringify({
		"bucket": "waydda-qr",
		"key": publicId,
		"edits": {
			"resize": {
				"width": width || height,
				"height": height || width,
				"fit": fit,
				...params
			}
		}
	})
	return `https://d1nrrr6y3ujrjz.cloudfront.net/${Base64.encode(options)}`
}

const getColor = (color) => {
	return hexRgb(color);
}

export default GetImageUrl
