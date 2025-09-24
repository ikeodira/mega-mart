"use client";

import { useQuery } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";


export default function Home() {



  return (
    <div>

    </div>
  );
}


// // This is how you do it with server side

// import { getQueryClient, trpc } from "@/trpc/server";
// import Image from "next/image";

// export default async function Home() {
//   const queryClient = getQueryClient();
//   const categories = await queryClient.fetchQuery(trpc.categories.getMany.queryOptions());

//   return (
//     <div>
//       {JSON.stringify(categories, null, 2)}
//     </div>
//   );
// }
