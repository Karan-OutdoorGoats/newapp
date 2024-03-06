/* eslint-disable @typescript-eslint/no-explicit-any */
import { UndefinedInitialDataOptions, useQuery } from "@tanstack/react-query";
import { RequestDocument, Variables } from "graphql-request";
import { GraphQLClientRequestHeaders } from "graphql-request/build/esm/types";
import graphqlNetwork from "graphql/graphql-instance";

const useGQLQuery = (
	key: any[],
	query: RequestDocument,
	variables: Variables,
	requestHeader?: GraphQLClientRequestHeaders,
	options?: UndefinedInitialDataOptions<unknown, Error, unknown, any[]>
) => {
	const getQuery = async () => {
		const awaitedData = await graphqlNetwork().request(
			query,
			variables,
			requestHeader
		);
		return awaitedData;
	};

	return useQuery({
		queryKey: key,
		queryFn: getQuery,
		retry: false,
		refetchOnWindowFocus: false,
		...options,
	});
};

export { useGQLQuery };
