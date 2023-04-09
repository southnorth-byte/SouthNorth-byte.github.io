(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{518:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[s._v("本章讲解Git 提交历史常用两个命令("),a("code",[s._v("git log")]),s._v(", "),a("code",[s._v("git blame<file>")]),s._v(")和Git标签("),a("code",[s._v("tag")]),s._v(")")])]),a("h2",{attrs:{id:"git-log-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-log-命令"}},[s._v("#")]),s._v(" git log 命令")]),s._v(" "),a("p",[s._v("在使用 Git 提交了若干更新之后，又或者克隆了某个项目，想回顾下提交历史，我们可以使用 "),a("strong",[s._v("git log")]),s._v(" 命令查看。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("我们可以用 "),a("code",[s._v("--oneline")]),s._v(" 选项来查看历史记录的简洁的版本。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--oneline")]),s._v("\nd5e9fc2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Merge branch "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'change_site'")]),s._v("\nc68142b 修改代码\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7774248")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("change_site"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" changed the southnorth.php\nc1501a2 removed test.txt、add southnorth.php\n3e92c19 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" test.txt\n3b58100 第一次版本提交\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("这告诉我们的是，此项目的开发历史。")]),s._v(" "),a("p",[s._v("我们还可以用 "),a("code",[s._v("--graph")]),s._v(" 选项，查看历史中什么时候出现了分支、合并。以下为相同的命令，开启了拓扑图选项：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--oneline")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--graph")]),s._v("\n*   d5e9fc2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Merge branch "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'change_site'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" * "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7774248")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("change_site"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" changed the southnorth.php\n* "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" c68142b 修改代码\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("/  \n* c1501a2 removed test.txt、add southnorth.php\n* 3e92c19 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" test.txt\n* 3b58100 第一次版本提交\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("现在我们可以更清楚明了地看到何时工作分叉、又何时归并。")]),s._v(" "),a("p",[s._v("你也可以用 "),a("code",[s._v("--reverse")]),s._v(" 参数来逆向显示所有日志。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--reverse")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--oneline")]),s._v("\n3b58100 第一次版本提交\n3e92c19 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" test.txt\nc1501a2 removed test.txt、add southnorth.php\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7774248")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("change_site"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" changed the southnorth.php\nc68142b 修改代码\nd5e9fc2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Merge branch "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'change_site'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("如果只想查找指定用户的提交日志可以使用命令："),a("code",[s._v("git log --author")]),s._v(" , 例如，比方说我们要找 Git 源码中 Linus 提交的部分：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--author")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Linus "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--oneline")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-5")]),s._v("\n81b50f3 Move "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'builtin-*'")]),s._v(" into a "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'builtin/'")]),s._v(" subdirectory\n3bb7256 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index-pack"')]),s._v(" a built-in\n377d027 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git pack-redundant"')]),s._v(" a built-in\nb532581 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git unpack-file"')]),s._v(" a built-in\n112dd51 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mktag"')]),s._v(" a built-in\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("如果你要指定日期，可以执行几个选项：--since 和 --before，但是你也可以用 "),a("code",[s._v("--until")]),s._v(" 和 "),a("code",[s._v("--after")]),s._v("。")]),s._v(" "),a("p",[s._v("例如，如果我要看 Git 项目中三周前且在四月十八日之后的所有提交，我可以执行这个（我还用了 --no-merges 选项以隐藏合并提交）：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--oneline")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--before")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".weeks.ago"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--after")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2010")]),s._v("-04-18"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" --no-merges\n5469e2d Git "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.7")]),s._v(".1-rc2\nd43427d Documentation/remote-helpers: Fix typos and improve language\n272a36b Fixup: Second argument may be any arbitrary string\nb6c8d2d Documentation/remote-helpers: Add invocation section\n5ce4f4e Documentation/urls: Rewrite to accomodate transport::address\n00b84e9 Documentation/remote-helpers: Rewrite description\n03aa87e Documentation: Describe other situations where "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-z")]),s._v(" affects "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v("\n77bc694 rebase-interactive: silence warning when no commits rewritten\n636db2c t3301: "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" tests to use "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--format")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%N"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("更多 git log 命令可查看："),a("a",{attrs:{href:"http://git-scm.com/docs/git-log",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://git-scm.com/docs/git-log"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"git-blame-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-blame-命令"}},[s._v("#")]),s._v(" git blame 命令")]),s._v(" "),a("p",[s._v("如果要查看指定文件的修改记录可以使用 git blame 命令，格式如下：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" blame "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("git blame 命令是以列表形式显示修改记录，如下实例：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" blame README \n^d2097aa "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tianqixin "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-08-25 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":59:25 +0800 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# southnorth Git 测试")]),s._v("\ndb9315b0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("southnorth    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-08-25 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":00:23 +0800 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 南北 ")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);