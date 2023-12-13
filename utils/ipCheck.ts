import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
import geoip from "geoip-lite";

const ipCheckMiddleware =
	(handler: NextApiHandler) =>
	async (req: NextApiRequest, res: NextApiResponse) => {
		const ip =
			(req.headers["x-forwarded-for"] as string) ||
			req.connection.remoteAddress;
		const geo = geoip.lookup(`${ip}`);

		if (geo && geo.country === "JP") {
			// Chặn yêu cầu từ Nhật Bản
			return res.status(403).json({ message: "Access denied" });
		}

		return handler(req, res);
	};

export default ipCheckMiddleware;
