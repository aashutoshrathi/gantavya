import { addProtocolToUrl } from "@/utils";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

const handler = async (req: NextRequest) => {
  const { pathname } = new URL(req.url);
  const url = pathname.replace("/api/", "");
  const decodedUrl = decodeURIComponent(url);

  const targetUrl = addProtocolToUrl(decodedUrl);
  const response = await fetch(targetUrl, {
    redirect: "manual"
  });

  const { status, headers } = response;
  const destination = headers.get("location") || targetUrl

  return new Response(
    JSON.stringify({
      orignalUrl: decodedUrl,
      destination,
      hasRedirect: status === 301 || status === 302,
    }),
    {
      status: 200,
    }
  );
};

export default handler;
