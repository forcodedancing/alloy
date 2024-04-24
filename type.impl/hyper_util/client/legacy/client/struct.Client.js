(function() {var type_impls = {
"alloy":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Client%3CC,+B%3E\" class=\"impl\"><a href=\"#impl-Client%3CC,+B%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;C, B&gt; Client&lt;C, B&gt;<div class=\"where\">where\n    C: Connect + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,\n    B: Body + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    &lt;B as Body&gt;::Data: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    &lt;B as Body&gt;::Error: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt;&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.get\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">get</a>(&amp;self, uri: Uri) -&gt; ResponseFuture <a href=\"#\" class=\"tooltip\" data-notable-ty=\"ResponseFuture\">ⓘ</a><div class=\"where\">where\n    B: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div></h4></section></summary><div class=\"docblock\"><p>Send a <code>GET</code> request to the supplied <code>Uri</code>.</p>\n<h5 id=\"note\"><a class=\"doc-anchor\" href=\"#note\">§</a>Note</h5>\n<p>This requires that the <code>Body</code> type have a <code>Default</code> implementation.\nIt <em>should</em> return an “empty” version of itself, such that\n<code>Body::is_end_stream</code> is <code>true</code>.</p>\n<h5 id=\"example\"><a class=\"doc-anchor\" href=\"#example\">§</a>Example</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>hyper::Uri;\n<span class=\"kw\">use </span>hyper_util::client::legacy::Client;\n<span class=\"kw\">use </span>hyper_util::rt::TokioExecutor;\n<span class=\"kw\">use </span>bytes::Bytes;\n<span class=\"kw\">use </span>http_body_util::Full;\n\n<span class=\"kw\">let </span>client: Client&lt;<span class=\"kw\">_</span>, Full&lt;Bytes&gt;&gt; = Client::builder(TokioExecutor::new()).build_http();\n\n<span class=\"kw\">let </span>future = client.get(Uri::from_static(<span class=\"string\">\"http://httpbin.org/ip\"</span>));</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.request\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">request</a>(&amp;self, req: Request&lt;B&gt;) -&gt; ResponseFuture <a href=\"#\" class=\"tooltip\" data-notable-ty=\"ResponseFuture\">ⓘ</a></h4></section></summary><div class=\"docblock\"><p>Send a constructed <code>Request</code> using this <code>Client</code>.</p>\n<h5 id=\"example-1\"><a class=\"doc-anchor\" href=\"#example-1\">§</a>Example</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>hyper::{Method, Request};\n<span class=\"kw\">use </span>hyper_util::client::legacy::Client;\n<span class=\"kw\">use </span>http_body_util::Full;\n<span class=\"kw\">use </span>hyper_util::rt::TokioExecutor;\n<span class=\"kw\">use </span>bytes::Bytes;\n\n<span class=\"kw\">let </span>client: Client&lt;<span class=\"kw\">_</span>, Full&lt;Bytes&gt;&gt; = Client::builder(TokioExecutor::new()).build_http();\n\n<span class=\"kw\">let </span>req: Request&lt;Full&lt;Bytes&gt;&gt; = Request::builder()\n    .method(Method::POST)\n    .uri(<span class=\"string\">\"http://httpbin.org/post\"</span>)\n    .body(Full::from(<span class=\"string\">\"Hallo!\"</span>))\n    .expect(<span class=\"string\">\"request builder\"</span>);\n\n<span class=\"kw\">let </span>future = client.request(req);</code></pre></div>\n</div></details></div></details>",0,"alloy::transports::http::HyperClient"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Client%3CC,+B%3E\" class=\"impl\"><a href=\"#impl-Clone-for-Client%3CC,+B%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;C, B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for Client&lt;C, B&gt;<div class=\"where\">where\n    C: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Client&lt;C, B&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","alloy::transports::http::HyperClient"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Client%3CC,+B%3E\" class=\"impl\"><a href=\"#impl-Debug-for-Client%3CC,+B%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;C, B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for Client&lt;C, B&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","alloy::transports::http::HyperClient"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Service%3CRequest%3CB%3E%3E-for-Client%3CC,+B%3E\" class=\"impl\"><a href=\"#impl-Service%3CRequest%3CB%3E%3E-for-Client%3CC,+B%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;C, B&gt; Service&lt;Request&lt;B&gt;&gt; for Client&lt;C, B&gt;<div class=\"where\">where\n    C: Connect + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,\n    B: Body + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    &lt;B as Body&gt;::Data: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    &lt;B as Body&gt;::Error: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt;&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Response\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Response\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Response</a> = Response&lt;Incoming&gt;</h4></section></summary><div class='docblock'>Responses given by the service.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Error</a> = Error</h4></section></summary><div class='docblock'>Errors produced by the service.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Future\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Future\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Future</a> = ResponseFuture</h4></section></summary><div class='docblock'>The future response value.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.poll_ready\" class=\"method trait-impl\"><a href=\"#method.poll_ready\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">poll_ready</a>(\n    &amp;mut self,\n    _: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/task/wake/struct.Context.html\" title=\"struct core::task::wake::Context\">Context</a>&lt;'_&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/task/poll/enum.Poll.html\" title=\"enum core::task::poll::Poll\">Poll</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, &lt;Client&lt;C, B&gt; as Service&lt;Request&lt;B&gt;&gt;&gt;::Error&gt;&gt;</h4></section></summary><div class='docblock'>Returns <code>Poll::Ready(Ok(()))</code> when the service is able to process requests. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.call\" class=\"method trait-impl\"><a href=\"#method.call\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">call</a>(\n    &amp;mut self,\n    req: Request&lt;B&gt;\n) -&gt; &lt;Client&lt;C, B&gt; as Service&lt;Request&lt;B&gt;&gt;&gt;::Future</h4></section></summary><div class='docblock'>Process the request and return the response asynchronously. <a>Read more</a></div></details></div></details>","Service<Request<B>>","alloy::transports::http::HyperClient"]],
"alloy_transport_http":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Client%3CC,+B%3E\" class=\"impl\"><a href=\"#impl-Client%3CC,+B%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;C, B&gt; Client&lt;C, B&gt;<div class=\"where\">where\n    C: Connect + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,\n    B: Body + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    &lt;B as Body&gt;::Data: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    &lt;B as Body&gt;::Error: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt;&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.get\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">get</a>(&amp;self, uri: Uri) -&gt; ResponseFuture<div class=\"where\">where\n    B: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div></h4></section></summary><div class=\"docblock\"><p>Send a <code>GET</code> request to the supplied <code>Uri</code>.</p>\n<h5 id=\"note\"><a class=\"doc-anchor\" href=\"#note\">§</a>Note</h5>\n<p>This requires that the <code>Body</code> type have a <code>Default</code> implementation.\nIt <em>should</em> return an “empty” version of itself, such that\n<code>Body::is_end_stream</code> is <code>true</code>.</p>\n<h5 id=\"example\"><a class=\"doc-anchor\" href=\"#example\">§</a>Example</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>hyper::Uri;\n<span class=\"kw\">use </span>hyper_util::client::legacy::Client;\n<span class=\"kw\">use </span>hyper_util::rt::TokioExecutor;\n<span class=\"kw\">use </span>bytes::Bytes;\n<span class=\"kw\">use </span>http_body_util::Full;\n\n<span class=\"kw\">let </span>client: Client&lt;<span class=\"kw\">_</span>, Full&lt;Bytes&gt;&gt; = Client::builder(TokioExecutor::new()).build_http();\n\n<span class=\"kw\">let </span>future = client.get(Uri::from_static(<span class=\"string\">\"http://httpbin.org/ip\"</span>));</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.request\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">request</a>(&amp;self, req: Request&lt;B&gt;) -&gt; ResponseFuture</h4></section></summary><div class=\"docblock\"><p>Send a constructed <code>Request</code> using this <code>Client</code>.</p>\n<h5 id=\"example-1\"><a class=\"doc-anchor\" href=\"#example-1\">§</a>Example</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>hyper::{Method, Request};\n<span class=\"kw\">use </span>hyper_util::client::legacy::Client;\n<span class=\"kw\">use </span>http_body_util::Full;\n<span class=\"kw\">use </span>hyper_util::rt::TokioExecutor;\n<span class=\"kw\">use </span>bytes::Bytes;\n\n<span class=\"kw\">let </span>client: Client&lt;<span class=\"kw\">_</span>, Full&lt;Bytes&gt;&gt; = Client::builder(TokioExecutor::new()).build_http();\n\n<span class=\"kw\">let </span>req: Request&lt;Full&lt;Bytes&gt;&gt; = Request::builder()\n    .method(Method::POST)\n    .uri(<span class=\"string\">\"http://httpbin.org/post\"</span>)\n    .body(Full::from(<span class=\"string\">\"Hallo!\"</span>))\n    .expect(<span class=\"string\">\"request builder\"</span>);\n\n<span class=\"kw\">let </span>future = client.request(req);</code></pre></div>\n</div></details></div></details>",0,"alloy_transport_http::HyperClient"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Client%3CC,+B%3E\" class=\"impl\"><a href=\"#impl-Clone-for-Client%3CC,+B%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;C, B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for Client&lt;C, B&gt;<div class=\"where\">where\n    C: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Client&lt;C, B&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","alloy_transport_http::HyperClient"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Client%3CC,+B%3E\" class=\"impl\"><a href=\"#impl-Debug-for-Client%3CC,+B%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;C, B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for Client&lt;C, B&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","alloy_transport_http::HyperClient"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Service%3CRequest%3CB%3E%3E-for-Client%3CC,+B%3E\" class=\"impl\"><a href=\"#impl-Service%3CRequest%3CB%3E%3E-for-Client%3CC,+B%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;C, B&gt; Service&lt;Request&lt;B&gt;&gt; for Client&lt;C, B&gt;<div class=\"where\">where\n    C: Connect + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,\n    B: Body + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    &lt;B as Body&gt;::Data: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    &lt;B as Body&gt;::Error: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt;&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Response\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Response\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Response</a> = Response&lt;Incoming&gt;</h4></section></summary><div class='docblock'>Responses given by the service.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Error</a> = Error</h4></section></summary><div class='docblock'>Errors produced by the service.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Future\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Future\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Future</a> = ResponseFuture</h4></section></summary><div class='docblock'>The future response value.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.poll_ready\" class=\"method trait-impl\"><a href=\"#method.poll_ready\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">poll_ready</a>(\n    &amp;mut self,\n    _: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/task/wake/struct.Context.html\" title=\"struct core::task::wake::Context\">Context</a>&lt;'_&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/task/poll/enum.Poll.html\" title=\"enum core::task::poll::Poll\">Poll</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, &lt;Client&lt;C, B&gt; as Service&lt;Request&lt;B&gt;&gt;&gt;::Error&gt;&gt;</h4></section></summary><div class='docblock'>Returns <code>Poll::Ready(Ok(()))</code> when the service is able to process requests. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.call\" class=\"method trait-impl\"><a href=\"#method.call\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">call</a>(\n    &amp;mut self,\n    req: Request&lt;B&gt;\n) -&gt; &lt;Client&lt;C, B&gt; as Service&lt;Request&lt;B&gt;&gt;&gt;::Future</h4></section></summary><div class='docblock'>Process the request and return the response asynchronously. <a>Read more</a></div></details></div></details>","Service<Request<B>>","alloy_transport_http::HyperClient"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()