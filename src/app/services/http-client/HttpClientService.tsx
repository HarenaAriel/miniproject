import { useFetch } from "../../hook/useFetch";
import RequestQuery from "../../models/RequestQuery";

function GET_Method({ url }: RequestQuery) {
  const { data, isLoading, error } = useFetch({ url });
  return { data, isLoading, error };
}

function POST_Method({ url, method, body, headers }: RequestQuery) {
  const { isLoading, error } = useFetch({ url, method, body, headers });
  return { isLoading, error };
}

function PUT_Method({ url, method, body, headers }: RequestQuery) {
  const { isLoading, error } = useFetch({ url, method, body, headers });
  return { isLoading, error };
}

function DELETE_Method({ url, method = "DELETE" }: RequestQuery) {
  const { isLoading, error } = useFetch({ url, method });
  return { isLoading, error };
}

export { GET_Method, POST_Method, PUT_Method, DELETE_Method };
