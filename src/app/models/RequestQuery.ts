export default interface RequestQuery{
  url: string,
  method?: "GET" | "POST" | "PUT" | "DELETE",
  body?: string,
  headers?: HeadersInit
}