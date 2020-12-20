// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import e from"./../assert/is-boolean.js";import t from"./../assert/is-string.js";import l from"./../assert/has-own-property.js";var n={"i.e.":["i.e."],"I.e.":["I.e."],"I.E.":["I.E."],"e.g.":["e.g."],"E.g.":["E.g."],"E.G.":["E.G."],"et al.":["et al."],"etc.":["etc."],"vs.":["vs."],"A.S.A.P":["A.S.A.P"],"E.T.A.":["E.T.A."],"D.I.Y":["D.I.Y"],"R.S.V.P":["R.S.V.P"],"P.S.":["P.S."],"B.Y.O.B":["B.Y.O.B"],"Ms.":["Ms."],"Mr.":["Mr."],"Dr.":["Dr."],"Prof.":["Prof."],"Mrs.":["Mrs."],"Messrs.":["Messrs."],"Gov.":["Gov."],"Gen.":["Gen."],"Lt.":["Lt."],"Col.":["Col."],"Mt.":["Mt."],"Bros.":["Bros."],"Corp.":["Corp."],"Co.":["Co."],"co.":["co."],"Inc.":["Inc."],"Ltd.":["Ltd."],"Rep.":["Rep."],"Sen.":["Sen."],"Jr.":["Jr."],"Sr.":["Sr."],"Ph.D.":["Ph.D."],"J.D.":["J.D."],"M.D.":["M.D."],"Rev.":["Rev."],"Adm.":["Adm."],"St.":["St."],"a.m.":["a.m."],"p.m.":["p.m."],"b.c.":["b.c."],"B.C.":["B.C."],"a.d.":["a.d."],"A.D.":["A.D."],"b.c.e.":["b.c.e."],"B.C.E.":["B.C.E."],"Jan.":["Jan."],"Feb.":["Feb."],"Mar.":["Mar."],"Apr.":["Apr."],"May.":["May."],"Jun.":["Jun."],"Jul.":["Jul."],"Aug.":["Aug."],"Sep.":["Sep."],"Sept.":["Sept."],"Oct.":["Oct."],"Nov.":["Nov."],"Dec.":["Dec."],"Ala.":["Ala."],"Ariz.":["Ariz."],"Ark.":["Ark."],"Calif.":["Calif."],"Colo.":["Colo."],"Conn.":["Conn."],"Del.":["Del."],"D.C.":["D.C."],"Fla.":["Fla."],"Ga.":["Ga."],"Ill.":["Ill."],"Ind.":["Ind."],"Kans.":["Kans."],"Kan.":["Kan."],"Ky.":["Ky."],"La.":["La."],"Md.":["Md."],"Mass.":["Mass."],"Mich.":["Mich."],"Minn.":["Minn."],"Miss.":["Miss."],"Mo.":["Mo."],"Mont.":["Mont."],"Nebr.":["Nebr."],"Neb.":["Neb."],"Nev.":["Nev."],"N.H.":["N.H."],"N.J.":["N.J."],"N.M.":["N.M."],"N.Y.":["N.Y."],"N.C.":["N.C."],"N.D.":["N.D."],"Okla.":["Okla."],"Ore.":["Ore."],"Pa.":["Pa."],"Tenn.":["Tenn."],"Va.":["Va."],"Wash.":["Wash."],"Wis.":["Wis."]},o=["xD"],h=["V_V"],v=["xDD"],s=["o_O"],a=["o_o"],d={"^_^":["^_^"],"=D":["=D"],";-p":[";-p"],":O":[":O"],":-/":[":-/"],xD:o,V_V:h,";(":[";("],"(:":["(:"],'")':['")'],":Y":[":Y"],":]":[":]"],":3":[":3"],":(":[":("],":-)":[":-)"],"=3":["=3"],":))":[":))"],":>":[":>"],";p":[";p"],":p":[":p"],"=[[":["=[["],xDD:v,"<333":["<333"],"<33":["<33"],":P":[":P"],"o.O":["o.O"],"<3":["<3"],";-)":[";-)"],":)":[":)"],"-_-":["-_-"],":')":[":')"],o_O:s,";)":[";)"],"=]":["=]"],"(=":["(="],"-__-":["-__-"],":/":[":/"],":0":[":0"],"(^_^)":["(^_^)"],";D":[";D"],o_o:a,":((":[":(("],"=)":["=)"]},r=["ai","nt"],i=["are","nt"],u=["ca","nt"],w=["can","not"],y=["Can","not"],m=["could","ve"],c=["could","nt"],p=["could","nt","ve"],D=["did","nt"],I=["does","nt"],M=["do","nt"],C=["had","nt"],g=["has","nt"],A=["have","nt"],N=["he","d"],Y=["he","d","ve"],S=["he","s"],T=["how","d"],f=["how","ll"],P=["how","s"],_=["I","m"],b=["i","m"],O=["is","nt"],W=["it","ll"],E=["let","s"],J=["that","s"],B=["wo","nt"],V={"'s":["'s"],"'S":["'S"],"ain't":["ai","n't"],aint:r,"Ain't":["Ai","n't"],"aren't":["are","n't"],arent:i,"Aren't":["Are","n't"],"can't":["ca","n't"],cant:u,"Can't":["Ca","n't"],"can't've":["ca","n't","'ve"],"'cause":["'cause'"],cannot:w,Cannot:y,"could've":["could","'ve"],couldve:m,"Could've":["Could","'ve"],"couldn't":["could","n't"],couldnt:c,"Couldn't":["Could","n't"],"couldn't've":["could","n't","'ve"],couldntve:p,"Couldn't've":["Could","n't","'ve"],"didn't":["did","n't"],didnt:D,"Didn't":["Did","n't"],"doesn't":["does","n't"],doesnt:I,"Doesn't":["Does","n't"],"don't":["do","n't"],dont:M,"Don't":["Do","n't"],"hadn't":["had","n't"],hadnt:C,"Hadn't":["Had","n't"],"hadn't've":["had","n't","'ve"],"hasn't":["has","n't"],hasnt:g,"haven't":["have","n't"],havent:A,"he'd":["he","'d"],hed:N,"he'd've":["he","'d","'ve"],hedve:Y,"he'll":["he","'ll"],"he'll've":["he","'ll","'ve"],"he's":["he","'s"],hes:S,"how'd":["how","'d"],howd:T,"how'd'y":["how","'d","'y"],"how'll":["how","'ll"],howll:f,"how's":["how","'s"],hows:P,"I'd":["I","'d"],"I'd've":["I","'d","'ve"],"I'll":["I","'ll"],"i'll":["i","'ll"],"I'll've":["I","'ll","'ve"],"i'll've":["i","'ll","'ve"],"I'm":["I","'m"],"i'm":["i","'m"],Im:_,im:b,"I'ma":["I","'ma"],"i'ma":["i","'ma"],"I've":["I","'ve"],"i've":["i","'ve"],"isn't":["is","n't"],isnt:O,"Isn't":["Is","n't"],"It'd":["It","'d"],"it'd":["it","'d"],"it'd've":["it","'d","'ve"],"it'll've":["it","'ll","'ve"],"it'll":["it","'ll"],itll:W,"it's":["it","'s"],"let's":["let","'s"],lets:E,"ma'am":["ma'am"],"mayn't":["may","n't"],"mightn't":["might","n't"],"mightn't've":["might","n't","'ve"],"might've":["might","'ve"],"mustn't":["must","n't"],"mustn't've":["must","n't","'ve"],"must've":["must","'ve"],"needn't":["need","n't"],"needn't've":["need","n't","'ve"],"not've":["not","'ve"],"o'clock":["o'clock"],"oughtn't":["ought","n't"],"oughtn't've":["ought","n't","'ve"],"so've":["so","'ve"],"so's":["so","'s"],"shan't":["sha","n't"],"sha'n't":["sha'","n't"],"shan't've":["sha","n't","'ve"],"she'd":["she","'d"],"she'd've":["she","'d","'ve"],"she'll":["she","'ll"],"she'll've":["she","'ll","'ve"],"she's":["she","'s"],"should've":["should","'ve"],"shouldn't":["should","n't"],"shouldn't've":["should","n't","'ve"],"that'd":["that","'d"],"that'd've":["that","'d","'ve"],"that's":["that","'s"],thats:J,"there'd":["there","'d"],"there'd've":["there","'d","'ve"],"there's":["there","'s"],"they'd":["they","'d"],"They'd":["They","'d"],"they'd've":["they","'d","'ve"],"They'd've":["They","'d","'ve"],"they'll":["they","'ll"],"They'll":["They","'ll"],"they'll've":["they","'ll","'ve"],"They'll've":["They","'ll","'ve"],"they're":["they","'re"],"They're":["They","'re"],"they've":["they","'ve"],"They've":["They","'ve"],"to've":["to","'ve"],"wasn't":["was","n't"],"we'd":["we","'d"],"We'd":["We","'d"],"we'd've":["we","'d","'ve"],"we'll":["we","'ll"],"We'll":["We","'ll"],"we'll've":["we","'ll","'ve"],"We'll've":["We","'ll","'ve"],"we're":["we","'re"],"We're":["We","'re"],"we've":["we","'ve"],"We've":["We","'ve"],"weren't":["were","n't"],"what'll":["what","'ll"],"what'll've":["what","'ll","'ve"],"what're":["what","'re"],"what's":["what","'s"],"what've":["what","'ve"],"when's":["when","'s"],"when've":["when","'ve"],"where'd":["where","'d"],"where's":["where","'s"],"where've":["where","'ve"],"who'd":["who","'d"],"who'll":["who","'ll"],"who'll've":["who","'ll'","'ve'"],"who're":["who","'re"],"who's":["who","'s"],"who've":["who","'ve"],"why've":["why","'ve"],"why'll":["why","'ll"],"why're":["why","'re"],"why's":["why","'s"],"will've":["will","'ve"],"won't":["wo","n't"],wont:B,"won't've":["wo","n't","'ve"],"would've":["would","'ve"],"wouldn't":["would","n't"],"wouldn't've":["would","n't","'ve"],"y'all":["y'","all"],"y'all'd":["y'","all","'d"],"y'all'd've":["y'","all","'d","'ve"],"y'all're":["y'","all","'re'"],"y'all've":["y'","all","ve"],"you'd":["you","'d"],"You'd":["You","'d"],"you'd've":["you","'d","'ve"],"You'd've":["You","'d","'ve"],"you'll":["you","'ll"],"You'll":["You","'ll"],"you'll've":["you","'ll","'ve"],"You'll've":["You","'ll","'ve"],"you're":["you","'re"],"You're":["You","'re"],"you've":["you","'ve"],"You've":["You","'ve"]},G=e.isPrimitive,k=t.isPrimitive,K=l,L=n,R=d,x=V,F=/^([,([{*<"“'`‘.])/gi,H=/([,.!?%*>:;"'”`)\]}])$/gi;function j(e,t){var l;for(l=0;l<t.length;l++)e.push(t[l]);return e}function z(e){var t,l,n,o=[],h=[];do{R[e]||L[e]||x[e]?l=!0:(t=e.split(F)).length>1?(o.push(t[1]),e=t[2]):(t=e.split(H)).length>1?(e=t[0],h.push(t[1])):l=!0}while(!l);return(n=o).push(e),j(n,h),n}function $(e,t){var l,n,o,h,v,s;if(!k(e))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>1&&!G(t))throw new TypeError("invalid argument. Second argument must be a boolean primitive. Value: `"+t+"`.");if(!e)return[];for(n=t?e.split(/(\s+)/):e.split(/\s+/),v={},o=[],s=0;s<n.length;s++)h=n[s],K(v,h)?j(o,v[h]):(j(o,l=z(h)),v[h]=l);return o}var q=$;export default q;
//# sourceMappingURL=tokenize.js.map