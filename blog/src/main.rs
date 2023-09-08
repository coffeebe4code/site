use crate::header::{HeaderMap, CONTENT_TYPE};
use axum::{
    http::header,
    response::{Html, IntoResponse},
    routing::get,
    Router,
};

async fn index() -> Html<String> {
    use rtml::*;
    return Html(
        html! {
            head!{
                title!("coffeeb4code blog"),
                link!(.rel = "stylesheet", .href="main.css")
            },
            body!{"hello"}
        }
        .render(),
    );
}
async fn main_css() -> impl IntoResponse {
    use rtml::*;
    let mut header_map = HeaderMap::new();
    header_map.insert(CONTENT_TYPE, "text/css".parse().unwrap());
    return (
        header_map,
        css!(html {
            background: "#f1ffff",
            font_family: "monaco, Consolas, Lucida Console, monospace;"
        })
        .render(),
    );
}
async fn favicon() {}

#[tokio::main]
async fn main() {
    // build our application with a single route
    let app = Router::new()
        .route("/", get(index))
        .route("/main.css", get(main_css))
        .route("/favicon.io", get(favicon));
    // run it with hyper on localhost:3000
    axum::Server::bind(&"0.0.0.0:3000".parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap();
}
