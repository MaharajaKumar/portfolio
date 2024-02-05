(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function km(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Of = { exports: {} },
  Vo = {},
  Ff = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ni = Symbol.for("react.element"),
  Pm = Symbol.for("react.portal"),
  Cm = Symbol.for("react.fragment"),
  Tm = Symbol.for("react.strict_mode"),
  Em = Symbol.for("react.profiler"),
  Lm = Symbol.for("react.provider"),
  Vm = Symbol.for("react.context"),
  Mm = Symbol.for("react.forward_ref"),
  Dm = Symbol.for("react.suspense"),
  Am = Symbol.for("react.memo"),
  Rm = Symbol.for("react.lazy"),
  pu = Symbol.iterator;
function jm(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (pu && e[pu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var If = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  zf = Object.assign,
  Bf = {};
function tr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Bf),
    (this.updater = n || If);
}
tr.prototype.isReactComponent = {};
tr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
tr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Uf() {}
Uf.prototype = tr.prototype;
function Zl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Bf),
    (this.updater = n || If);
}
var ql = (Zl.prototype = new Uf());
ql.constructor = Zl;
zf(ql, tr.prototype);
ql.isPureReactComponent = !0;
var hu = Array.isArray,
  Wf = Object.prototype.hasOwnProperty,
  Jl = { current: null },
  Hf = { key: !0, ref: !0, __self: !0, __source: !0 };
function $f(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Wf.call(t, r) && !Hf.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: ni,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Jl.current,
  };
}
function Nm(e, t) {
  return {
    $$typeof: ni,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function bl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ni;
}
function _m(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var mu = /\/+/g;
function rs(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? _m("" + e.key)
    : t.toString(36);
}
function Ni(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ni:
          case Pm:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + rs(s, 0) : r),
      hu(i)
        ? ((n = ""),
          e != null && (n = e.replace(mu, "$&/") + "/"),
          Ni(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (bl(i) &&
            (i = Nm(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(mu, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), hu(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var a = r + rs(o, l);
      s += Ni(o, t, n, a, i);
    }
  else if (((a = jm(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + rs(o, l++)), (s += Ni(o, t, n, a, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function di(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ni(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Om(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ke = { current: null },
  _i = { transition: null },
  Fm = {
    ReactCurrentDispatcher: ke,
    ReactCurrentBatchConfig: _i,
    ReactCurrentOwner: Jl,
  };
F.Children = {
  map: di,
  forEach: function (e, t, n) {
    di(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      di(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      di(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!bl(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
F.Component = tr;
F.Fragment = Cm;
F.Profiler = Em;
F.PureComponent = Zl;
F.StrictMode = Tm;
F.Suspense = Dm;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fm;
F.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = zf({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Jl.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Wf.call(t, a) &&
        !Hf.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: ni, type: e.type, key: i, ref: o, props: r, _owner: s };
};
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: Vm,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Lm, _context: e }),
    (e.Consumer = e)
  );
};
F.createElement = $f;
F.createFactory = function (e) {
  var t = $f.bind(null, e);
  return (t.type = e), t;
};
F.createRef = function () {
  return { current: null };
};
F.forwardRef = function (e) {
  return { $$typeof: Mm, render: e };
};
F.isValidElement = bl;
F.lazy = function (e) {
  return { $$typeof: Rm, _payload: { _status: -1, _result: e }, _init: Om };
};
F.memo = function (e, t) {
  return { $$typeof: Am, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
  var t = _i.transition;
  _i.transition = {};
  try {
    e();
  } finally {
    _i.transition = t;
  }
};
F.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
F.useCallback = function (e, t) {
  return ke.current.useCallback(e, t);
};
F.useContext = function (e) {
  return ke.current.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e) {
  return ke.current.useDeferredValue(e);
};
F.useEffect = function (e, t) {
  return ke.current.useEffect(e, t);
};
F.useId = function () {
  return ke.current.useId();
};
F.useImperativeHandle = function (e, t, n) {
  return ke.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function (e, t) {
  return ke.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
  return ke.current.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
  return ke.current.useMemo(e, t);
};
F.useReducer = function (e, t, n) {
  return ke.current.useReducer(e, t, n);
};
F.useRef = function (e) {
  return ke.current.useRef(e);
};
F.useState = function (e) {
  return ke.current.useState(e);
};
F.useSyncExternalStore = function (e, t, n) {
  return ke.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function () {
  return ke.current.useTransition();
};
F.version = "18.2.0";
Ff.exports = F;
var M = Ff.exports;
const ea = km(M);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Im = M,
  zm = Symbol.for("react.element"),
  Bm = Symbol.for("react.fragment"),
  Um = Object.prototype.hasOwnProperty,
  Wm = Im.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Hm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gf(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Um.call(t, r) && !Hm.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: zm,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Wm.current,
  };
}
Vo.Fragment = Bm;
Vo.jsx = Gf;
Vo.jsxs = Gf;
Of.exports = Vo;
var w = Of.exports,
  Ws = {},
  Kf = { exports: {} },
  _e = {},
  Qf = { exports: {} },
  Yf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(L, A) {
    var _ = L.length;
    L.push(A);
    e: for (; 0 < _; ) {
      var j = (_ - 1) >>> 1,
        $ = L[j];
      if (0 < i($, A)) (L[j] = A), (L[_] = $), (_ = j);
      else break e;
    }
  }
  function n(L) {
    return L.length === 0 ? null : L[0];
  }
  function r(L) {
    if (L.length === 0) return null;
    var A = L[0],
      _ = L.pop();
    if (_ !== A) {
      L[0] = _;
      e: for (var j = 0, $ = L.length, Zt = $ >>> 1; j < Zt; ) {
        var tt = 2 * (j + 1) - 1,
          Sn = L[tt],
          Me = tt + 1,
          qt = L[Me];
        if (0 > i(Sn, _))
          Me < $ && 0 > i(qt, Sn)
            ? ((L[j] = qt), (L[Me] = _), (j = Me))
            : ((L[j] = Sn), (L[tt] = _), (j = tt));
        else if (Me < $ && 0 > i(qt, _)) (L[j] = qt), (L[Me] = _), (j = Me);
        else break e;
      }
    }
    return A;
  }
  function i(L, A) {
    var _ = L.sortIndex - A.sortIndex;
    return _ !== 0 ? _ : L.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    g = !1,
    y = !1,
    v = !1,
    T = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(L) {
    for (var A = n(u); A !== null; ) {
      if (A.callback === null) r(u);
      else if (A.startTime <= L)
        r(u), (A.sortIndex = A.expirationTime), t(a, A);
      else break;
      A = n(u);
    }
  }
  function x(L) {
    if (((v = !1), h(L), !y))
      if (n(a) !== null) (y = !0), J(S);
      else {
        var A = n(u);
        A !== null && Fe(x, A.startTime - L);
      }
  }
  function S(L, A) {
    (y = !1), v && ((v = !1), m(P), (P = -1)), (g = !0);
    var _ = d;
    try {
      for (
        h(A), f = n(a);
        f !== null && (!(f.expirationTime > A) || (L && !oe()));

      ) {
        var j = f.callback;
        if (typeof j == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var $ = j(f.expirationTime <= A);
          (A = e.unstable_now()),
            typeof $ == "function" ? (f.callback = $) : f === n(a) && r(a),
            h(A);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var Zt = !0;
      else {
        var tt = n(u);
        tt !== null && Fe(x, tt.startTime - A), (Zt = !1);
      }
      return Zt;
    } finally {
      (f = null), (d = _), (g = !1);
    }
  }
  var E = !1,
    C = null,
    P = -1,
    N = 5,
    R = -1;
  function oe() {
    return !(e.unstable_now() - R < N);
  }
  function ue() {
    if (C !== null) {
      var L = e.unstable_now();
      R = L;
      var A = !0;
      try {
        A = C(!0, L);
      } finally {
        A ? ve() : ((E = !1), (C = null));
      }
    } else E = !1;
  }
  var ve;
  if (typeof p == "function")
    ve = function () {
      p(ue);
    };
  else if (typeof MessageChannel < "u") {
    var se = new MessageChannel(),
      St = se.port2;
    (se.port1.onmessage = ue),
      (ve = function () {
        St.postMessage(null);
      });
  } else
    ve = function () {
      T(ue, 0);
    };
  function J(L) {
    (C = L), E || ((E = !0), ve());
  }
  function Fe(L, A) {
    P = T(function () {
      L(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (L) {
      L.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), J(S));
    }),
    (e.unstable_forceFrameRate = function (L) {
      0 > L || 125 < L
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (N = 0 < L ? Math.floor(1e3 / L) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (L) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = d;
      }
      var _ = d;
      d = A;
      try {
        return L();
      } finally {
        d = _;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (L, A) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var _ = d;
      d = L;
      try {
        return A();
      } finally {
        d = _;
      }
    }),
    (e.unstable_scheduleCallback = function (L, A, _) {
      var j = e.unstable_now();
      switch (
        (typeof _ == "object" && _ !== null
          ? ((_ = _.delay), (_ = typeof _ == "number" && 0 < _ ? j + _ : j))
          : (_ = j),
        L)
      ) {
        case 1:
          var $ = -1;
          break;
        case 2:
          $ = 250;
          break;
        case 5:
          $ = 1073741823;
          break;
        case 4:
          $ = 1e4;
          break;
        default:
          $ = 5e3;
      }
      return (
        ($ = _ + $),
        (L = {
          id: c++,
          callback: A,
          priorityLevel: L,
          startTime: _,
          expirationTime: $,
          sortIndex: -1,
        }),
        _ > j
          ? ((L.sortIndex = _),
            t(u, L),
            n(a) === null &&
              L === n(u) &&
              (v ? (m(P), (P = -1)) : (v = !0), Fe(x, _ - j)))
          : ((L.sortIndex = $), t(a, L), y || g || ((y = !0), J(S))),
        L
      );
    }),
    (e.unstable_shouldYield = oe),
    (e.unstable_wrapCallback = function (L) {
      var A = d;
      return function () {
        var _ = d;
        d = A;
        try {
          return L.apply(this, arguments);
        } finally {
          d = _;
        }
      };
    });
})(Yf);
Qf.exports = Yf;
var $m = Qf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xf = M,
  je = $m;
function k(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Zf = new Set(),
  _r = {};
function yn(e, t) {
  Kn(e, t), Kn(e + "Capture", t);
}
function Kn(e, t) {
  for (_r[e] = t, e = 0; e < t.length; e++) Zf.add(t[e]);
}
var gt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Hs = Object.prototype.hasOwnProperty,
  Gm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  gu = {},
  yu = {};
function Km(e) {
  return Hs.call(yu, e)
    ? !0
    : Hs.call(gu, e)
    ? !1
    : Gm.test(e)
    ? (yu[e] = !0)
    : ((gu[e] = !0), !1);
}
function Qm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Ym(e, t, n, r) {
  if (t === null || typeof t > "u" || Qm(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Pe(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var de = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    de[e] = new Pe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  de[t] = new Pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  de[e] = new Pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  de[e] = new Pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    de[e] = new Pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  de[e] = new Pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  de[e] = new Pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  de[e] = new Pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  de[e] = new Pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ta = /[\-:]([a-z])/g;
function na(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ta, na);
    de[t] = new Pe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ta, na);
    de[t] = new Pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ta, na);
  de[t] = new Pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  de[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
de.xlinkHref = new Pe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  de[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ra(e, t, n, r) {
  var i = de.hasOwnProperty(t) ? de[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Ym(t, n, i, r) && (n = null),
    r || i === null
      ? Km(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var wt = Xf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  pi = Symbol.for("react.element"),
  Cn = Symbol.for("react.portal"),
  Tn = Symbol.for("react.fragment"),
  ia = Symbol.for("react.strict_mode"),
  $s = Symbol.for("react.profiler"),
  qf = Symbol.for("react.provider"),
  Jf = Symbol.for("react.context"),
  oa = Symbol.for("react.forward_ref"),
  Gs = Symbol.for("react.suspense"),
  Ks = Symbol.for("react.suspense_list"),
  sa = Symbol.for("react.memo"),
  Tt = Symbol.for("react.lazy"),
  bf = Symbol.for("react.offscreen"),
  vu = Symbol.iterator;
function ir(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (vu && e[vu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var X = Object.assign,
  is;
function mr(e) {
  if (is === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      is = (t && t[1]) || "";
    }
  return (
    `
` +
    is +
    e
  );
}
var os = !1;
function ss(e, t) {
  if (!e || os) return "";
  os = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          l = o.length - 1;
        1 <= s && 0 <= l && i[s] !== o[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (i[s] !== o[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || i[s] !== o[l])) {
                var a =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (os = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? mr(e) : "";
}
function Xm(e) {
  switch (e.tag) {
    case 5:
      return mr(e.type);
    case 16:
      return mr("Lazy");
    case 13:
      return mr("Suspense");
    case 19:
      return mr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ss(e.type, !1)), e;
    case 11:
      return (e = ss(e.type.render, !1)), e;
    case 1:
      return (e = ss(e.type, !0)), e;
    default:
      return "";
  }
}
function Qs(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Tn:
      return "Fragment";
    case Cn:
      return "Portal";
    case $s:
      return "Profiler";
    case ia:
      return "StrictMode";
    case Gs:
      return "Suspense";
    case Ks:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Jf:
        return (e.displayName || "Context") + ".Consumer";
      case qf:
        return (e._context.displayName || "Context") + ".Provider";
      case oa:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case sa:
        return (
          (t = e.displayName || null), t !== null ? t : Qs(e.type) || "Memo"
        );
      case Tt:
        (t = e._payload), (e = e._init);
        try {
          return Qs(e(t));
        } catch {}
    }
  return null;
}
function Zm(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qs(t);
    case 8:
      return t === ia ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Wt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ed(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function qm(e) {
  var t = ed(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function hi(e) {
  e._valueTracker || (e._valueTracker = qm(e));
}
function td(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ed(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Zi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ys(e, t) {
  var n = t.checked;
  return X({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function xu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Wt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function nd(e, t) {
  (t = t.checked), t != null && ra(e, "checked", t, !1);
}
function Xs(e, t) {
  nd(e, t);
  var n = Wt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Zs(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Zs(e, t.type, Wt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function wu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Zs(e, t, n) {
  (t !== "number" || Zi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var gr = Array.isArray;
function Bn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Wt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function qs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return X({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Su(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (gr(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Wt(n) };
}
function rd(e, t) {
  var n = Wt(t.value),
    r = Wt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ku(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function id(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Js(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? id(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var mi,
  od = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        mi = mi || document.createElement("div"),
          mi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = mi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Or(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var wr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Jm = ["Webkit", "ms", "Moz", "O"];
Object.keys(wr).forEach(function (e) {
  Jm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (wr[t] = wr[e]);
  });
});
function sd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (wr.hasOwnProperty(e) && wr[e])
    ? ("" + t).trim()
    : t + "px";
}
function ld(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = sd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var bm = X(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function bs(e, t) {
  if (t) {
    if (bm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function el(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var tl = null;
function la(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var nl = null,
  Un = null,
  Wn = null;
function Pu(e) {
  if ((e = oi(e))) {
    if (typeof nl != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = jo(t)), nl(e.stateNode, e.type, t));
  }
}
function ad(e) {
  Un ? (Wn ? Wn.push(e) : (Wn = [e])) : (Un = e);
}
function ud() {
  if (Un) {
    var e = Un,
      t = Wn;
    if (((Wn = Un = null), Pu(e), t)) for (e = 0; e < t.length; e++) Pu(t[e]);
  }
}
function cd(e, t) {
  return e(t);
}
function fd() {}
var ls = !1;
function dd(e, t, n) {
  if (ls) return e(t, n);
  ls = !0;
  try {
    return cd(e, t, n);
  } finally {
    (ls = !1), (Un !== null || Wn !== null) && (fd(), ud());
  }
}
function Fr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = jo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var rl = !1;
if (gt)
  try {
    var or = {};
    Object.defineProperty(or, "passive", {
      get: function () {
        rl = !0;
      },
    }),
      window.addEventListener("test", or, or),
      window.removeEventListener("test", or, or);
  } catch {
    rl = !1;
  }
function eg(e, t, n, r, i, o, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Sr = !1,
  qi = null,
  Ji = !1,
  il = null,
  tg = {
    onError: function (e) {
      (Sr = !0), (qi = e);
    },
  };
function ng(e, t, n, r, i, o, s, l, a) {
  (Sr = !1), (qi = null), eg.apply(tg, arguments);
}
function rg(e, t, n, r, i, o, s, l, a) {
  if ((ng.apply(this, arguments), Sr)) {
    if (Sr) {
      var u = qi;
      (Sr = !1), (qi = null);
    } else throw Error(k(198));
    Ji || ((Ji = !0), (il = u));
  }
}
function vn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function pd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Cu(e) {
  if (vn(e) !== e) throw Error(k(188));
}
function ig(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = vn(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Cu(i), e;
        if (o === r) return Cu(i), t;
        o = o.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, l = i.child; l; ) {
        if (l === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function hd(e) {
  return (e = ig(e)), e !== null ? md(e) : null;
}
function md(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = md(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var gd = je.unstable_scheduleCallback,
  Tu = je.unstable_cancelCallback,
  og = je.unstable_shouldYield,
  sg = je.unstable_requestPaint,
  b = je.unstable_now,
  lg = je.unstable_getCurrentPriorityLevel,
  aa = je.unstable_ImmediatePriority,
  yd = je.unstable_UserBlockingPriority,
  bi = je.unstable_NormalPriority,
  ag = je.unstable_LowPriority,
  vd = je.unstable_IdlePriority,
  Mo = null,
  ot = null;
function ug(e) {
  if (ot && typeof ot.onCommitFiberRoot == "function")
    try {
      ot.onCommitFiberRoot(Mo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var qe = Math.clz32 ? Math.clz32 : dg,
  cg = Math.log,
  fg = Math.LN2;
function dg(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((cg(e) / fg) | 0)) | 0;
}
var gi = 64,
  yi = 4194304;
function yr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function eo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~i;
    l !== 0 ? (r = yr(l)) : ((o &= s), o !== 0 && (r = yr(o)));
  } else (s = n & ~i), s !== 0 ? (r = yr(s)) : o !== 0 && (r = yr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - qe(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function pg(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function hg(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - qe(o),
      l = 1 << s,
      a = i[s];
    a === -1
      ? (!(l & n) || l & r) && (i[s] = pg(l, t))
      : a <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function ol(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function xd() {
  var e = gi;
  return (gi <<= 1), !(gi & 4194240) && (gi = 64), e;
}
function as(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ri(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - qe(t)),
    (e[t] = n);
}
function mg(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - qe(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function ua(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - qe(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var B = 0;
function wd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Sd,
  ca,
  kd,
  Pd,
  Cd,
  sl = !1,
  vi = [],
  Rt = null,
  jt = null,
  Nt = null,
  Ir = new Map(),
  zr = new Map(),
  Vt = [],
  gg =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Eu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Rt = null;
      break;
    case "dragenter":
    case "dragleave":
      jt = null;
      break;
    case "mouseover":
    case "mouseout":
      Nt = null;
      break;
    case "pointerover":
    case "pointerout":
      Ir.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      zr.delete(t.pointerId);
  }
}
function sr(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = oi(t)), t !== null && ca(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function yg(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Rt = sr(Rt, e, t, n, r, i)), !0;
    case "dragenter":
      return (jt = sr(jt, e, t, n, r, i)), !0;
    case "mouseover":
      return (Nt = sr(Nt, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Ir.set(o, sr(Ir.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), zr.set(o, sr(zr.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Td(e) {
  var t = sn(e.target);
  if (t !== null) {
    var n = vn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = pd(n)), t !== null)) {
          (e.blockedOn = t),
            Cd(e.priority, function () {
              kd(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Oi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ll(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (tl = r), n.target.dispatchEvent(r), (tl = null);
    } else return (t = oi(n)), t !== null && ca(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Lu(e, t, n) {
  Oi(e) && n.delete(t);
}
function vg() {
  (sl = !1),
    Rt !== null && Oi(Rt) && (Rt = null),
    jt !== null && Oi(jt) && (jt = null),
    Nt !== null && Oi(Nt) && (Nt = null),
    Ir.forEach(Lu),
    zr.forEach(Lu);
}
function lr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    sl ||
      ((sl = !0),
      je.unstable_scheduleCallback(je.unstable_NormalPriority, vg)));
}
function Br(e) {
  function t(i) {
    return lr(i, e);
  }
  if (0 < vi.length) {
    lr(vi[0], e);
    for (var n = 1; n < vi.length; n++) {
      var r = vi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Rt !== null && lr(Rt, e),
      jt !== null && lr(jt, e),
      Nt !== null && lr(Nt, e),
      Ir.forEach(t),
      zr.forEach(t),
      n = 0;
    n < Vt.length;
    n++
  )
    (r = Vt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Vt.length && ((n = Vt[0]), n.blockedOn === null); )
    Td(n), n.blockedOn === null && Vt.shift();
}
var Hn = wt.ReactCurrentBatchConfig,
  to = !0;
function xg(e, t, n, r) {
  var i = B,
    o = Hn.transition;
  Hn.transition = null;
  try {
    (B = 1), fa(e, t, n, r);
  } finally {
    (B = i), (Hn.transition = o);
  }
}
function wg(e, t, n, r) {
  var i = B,
    o = Hn.transition;
  Hn.transition = null;
  try {
    (B = 4), fa(e, t, n, r);
  } finally {
    (B = i), (Hn.transition = o);
  }
}
function fa(e, t, n, r) {
  if (to) {
    var i = ll(e, t, n, r);
    if (i === null) vs(e, t, r, no, n), Eu(e, r);
    else if (yg(i, e, t, n, r)) r.stopPropagation();
    else if ((Eu(e, r), t & 4 && -1 < gg.indexOf(e))) {
      for (; i !== null; ) {
        var o = oi(i);
        if (
          (o !== null && Sd(o),
          (o = ll(e, t, n, r)),
          o === null && vs(e, t, r, no, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else vs(e, t, r, null, n);
  }
}
var no = null;
function ll(e, t, n, r) {
  if (((no = null), (e = la(r)), (e = sn(e)), e !== null))
    if (((t = vn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = pd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (no = e), null;
}
function Ed(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (lg()) {
        case aa:
          return 1;
        case yd:
          return 4;
        case bi:
        case ag:
          return 16;
        case vd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Dt = null,
  da = null,
  Fi = null;
function Ld() {
  if (Fi) return Fi;
  var e,
    t = da,
    n = t.length,
    r,
    i = "value" in Dt ? Dt.value : Dt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (Fi = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Ii(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function xi() {
  return !0;
}
function Vu() {
  return !1;
}
function Oe(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? xi
        : Vu),
      (this.isPropagationStopped = Vu),
      this
    );
  }
  return (
    X(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = xi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = xi));
      },
      persist: function () {},
      isPersistent: xi,
    }),
    t
  );
}
var nr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  pa = Oe(nr),
  ii = X({}, nr, { view: 0, detail: 0 }),
  Sg = Oe(ii),
  us,
  cs,
  ar,
  Do = X({}, ii, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ha,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ar &&
            (ar && e.type === "mousemove"
              ? ((us = e.screenX - ar.screenX), (cs = e.screenY - ar.screenY))
              : (cs = us = 0),
            (ar = e)),
          us);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : cs;
    },
  }),
  Mu = Oe(Do),
  kg = X({}, Do, { dataTransfer: 0 }),
  Pg = Oe(kg),
  Cg = X({}, ii, { relatedTarget: 0 }),
  fs = Oe(Cg),
  Tg = X({}, nr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Eg = Oe(Tg),
  Lg = X({}, nr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Vg = Oe(Lg),
  Mg = X({}, nr, { data: 0 }),
  Du = Oe(Mg),
  Dg = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Ag = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Rg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function jg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Rg[e]) ? !!t[e] : !1;
}
function ha() {
  return jg;
}
var Ng = X({}, ii, {
    key: function (e) {
      if (e.key) {
        var t = Dg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ii(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Ag[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ha,
    charCode: function (e) {
      return e.type === "keypress" ? Ii(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ii(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  _g = Oe(Ng),
  Og = X({}, Do, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Au = Oe(Og),
  Fg = X({}, ii, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ha,
  }),
  Ig = Oe(Fg),
  zg = X({}, nr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Bg = Oe(zg),
  Ug = X({}, Do, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Wg = Oe(Ug),
  Hg = [9, 13, 27, 32],
  ma = gt && "CompositionEvent" in window,
  kr = null;
gt && "documentMode" in document && (kr = document.documentMode);
var $g = gt && "TextEvent" in window && !kr,
  Vd = gt && (!ma || (kr && 8 < kr && 11 >= kr)),
  Ru = String.fromCharCode(32),
  ju = !1;
function Md(e, t) {
  switch (e) {
    case "keyup":
      return Hg.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Dd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var En = !1;
function Gg(e, t) {
  switch (e) {
    case "compositionend":
      return Dd(t);
    case "keypress":
      return t.which !== 32 ? null : ((ju = !0), Ru);
    case "textInput":
      return (e = t.data), e === Ru && ju ? null : e;
    default:
      return null;
  }
}
function Kg(e, t) {
  if (En)
    return e === "compositionend" || (!ma && Md(e, t))
      ? ((e = Ld()), (Fi = da = Dt = null), (En = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Vd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Qg = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Nu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Qg[e.type] : t === "textarea";
}
function Ad(e, t, n, r) {
  ad(r),
    (t = ro(t, "onChange")),
    0 < t.length &&
      ((n = new pa("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Pr = null,
  Ur = null;
function Yg(e) {
  Wd(e, 0);
}
function Ao(e) {
  var t = Mn(e);
  if (td(t)) return e;
}
function Xg(e, t) {
  if (e === "change") return t;
}
var Rd = !1;
if (gt) {
  var ds;
  if (gt) {
    var ps = "oninput" in document;
    if (!ps) {
      var _u = document.createElement("div");
      _u.setAttribute("oninput", "return;"),
        (ps = typeof _u.oninput == "function");
    }
    ds = ps;
  } else ds = !1;
  Rd = ds && (!document.documentMode || 9 < document.documentMode);
}
function Ou() {
  Pr && (Pr.detachEvent("onpropertychange", jd), (Ur = Pr = null));
}
function jd(e) {
  if (e.propertyName === "value" && Ao(Ur)) {
    var t = [];
    Ad(t, Ur, e, la(e)), dd(Yg, t);
  }
}
function Zg(e, t, n) {
  e === "focusin"
    ? (Ou(), (Pr = t), (Ur = n), Pr.attachEvent("onpropertychange", jd))
    : e === "focusout" && Ou();
}
function qg(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ao(Ur);
}
function Jg(e, t) {
  if (e === "click") return Ao(t);
}
function bg(e, t) {
  if (e === "input" || e === "change") return Ao(t);
}
function ey(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var be = typeof Object.is == "function" ? Object.is : ey;
function Wr(e, t) {
  if (be(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Hs.call(t, i) || !be(e[i], t[i])) return !1;
  }
  return !0;
}
function Fu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Iu(e, t) {
  var n = Fu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Fu(n);
  }
}
function Nd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Nd(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function _d() {
  for (var e = window, t = Zi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Zi(e.document);
  }
  return t;
}
function ga(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function ty(e) {
  var t = _d(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Nd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ga(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Iu(n, o));
        var s = Iu(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var ny = gt && "documentMode" in document && 11 >= document.documentMode,
  Ln = null,
  al = null,
  Cr = null,
  ul = !1;
function zu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ul ||
    Ln == null ||
    Ln !== Zi(r) ||
    ((r = Ln),
    "selectionStart" in r && ga(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Cr && Wr(Cr, r)) ||
      ((Cr = r),
      (r = ro(al, "onSelect")),
      0 < r.length &&
        ((t = new pa("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ln))));
}
function wi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Vn = {
    animationend: wi("Animation", "AnimationEnd"),
    animationiteration: wi("Animation", "AnimationIteration"),
    animationstart: wi("Animation", "AnimationStart"),
    transitionend: wi("Transition", "TransitionEnd"),
  },
  hs = {},
  Od = {};
gt &&
  ((Od = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Vn.animationend.animation,
    delete Vn.animationiteration.animation,
    delete Vn.animationstart.animation),
  "TransitionEvent" in window || delete Vn.transitionend.transition);
function Ro(e) {
  if (hs[e]) return hs[e];
  if (!Vn[e]) return e;
  var t = Vn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Od) return (hs[e] = t[n]);
  return e;
}
var Fd = Ro("animationend"),
  Id = Ro("animationiteration"),
  zd = Ro("animationstart"),
  Bd = Ro("transitionend"),
  Ud = new Map(),
  Bu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Kt(e, t) {
  Ud.set(e, t), yn(t, [e]);
}
for (var ms = 0; ms < Bu.length; ms++) {
  var gs = Bu[ms],
    ry = gs.toLowerCase(),
    iy = gs[0].toUpperCase() + gs.slice(1);
  Kt(ry, "on" + iy);
}
Kt(Fd, "onAnimationEnd");
Kt(Id, "onAnimationIteration");
Kt(zd, "onAnimationStart");
Kt("dblclick", "onDoubleClick");
Kt("focusin", "onFocus");
Kt("focusout", "onBlur");
Kt(Bd, "onTransitionEnd");
Kn("onMouseEnter", ["mouseout", "mouseover"]);
Kn("onMouseLeave", ["mouseout", "mouseover"]);
Kn("onPointerEnter", ["pointerout", "pointerover"]);
Kn("onPointerLeave", ["pointerout", "pointerover"]);
yn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
yn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
yn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
yn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
yn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
yn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var vr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  oy = new Set("cancel close invalid load scroll toggle".split(" ").concat(vr));
function Uu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), rg(r, t, void 0, e), (e.currentTarget = null);
}
function Wd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== o && i.isPropagationStopped())) break e;
          Uu(i, l, u), (o = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== o && i.isPropagationStopped())
          )
            break e;
          Uu(i, l, u), (o = a);
        }
    }
  }
  if (Ji) throw ((e = il), (Ji = !1), (il = null), e);
}
function W(e, t) {
  var n = t[hl];
  n === void 0 && (n = t[hl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Hd(t, e, 2, !1), n.add(r));
}
function ys(e, t, n) {
  var r = 0;
  t && (r |= 4), Hd(n, e, r, t);
}
var Si = "_reactListening" + Math.random().toString(36).slice(2);
function Hr(e) {
  if (!e[Si]) {
    (e[Si] = !0),
      Zf.forEach(function (n) {
        n !== "selectionchange" && (oy.has(n) || ys(n, !1, e), ys(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Si] || ((t[Si] = !0), ys("selectionchange", !1, t));
  }
}
function Hd(e, t, n, r) {
  switch (Ed(t)) {
    case 1:
      var i = xg;
      break;
    case 4:
      i = wg;
      break;
    default:
      i = fa;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !rl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function vs(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = sn(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = o = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  dd(function () {
    var u = o,
      c = la(n),
      f = [];
    e: {
      var d = Ud.get(e);
      if (d !== void 0) {
        var g = pa,
          y = e;
        switch (e) {
          case "keypress":
            if (Ii(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = _g;
            break;
          case "focusin":
            (y = "focus"), (g = fs);
            break;
          case "focusout":
            (y = "blur"), (g = fs);
            break;
          case "beforeblur":
          case "afterblur":
            g = fs;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Mu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Pg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Ig;
            break;
          case Fd:
          case Id:
          case zd:
            g = Eg;
            break;
          case Bd:
            g = Bg;
            break;
          case "scroll":
            g = Sg;
            break;
          case "wheel":
            g = Wg;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Vg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Au;
        }
        var v = (t & 4) !== 0,
          T = !v && e === "scroll",
          m = v ? (d !== null ? d + "Capture" : null) : d;
        v = [];
        for (var p = u, h; p !== null; ) {
          h = p;
          var x = h.stateNode;
          if (
            (h.tag === 5 &&
              x !== null &&
              ((h = x),
              m !== null && ((x = Fr(p, m)), x != null && v.push($r(p, x, h)))),
            T)
          )
            break;
          p = p.return;
        }
        0 < v.length &&
          ((d = new g(d, y, null, n, c)), f.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          d &&
            n !== tl &&
            (y = n.relatedTarget || n.fromElement) &&
            (sn(y) || y[yt]))
        )
          break e;
        if (
          (g || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = u),
              (y = y ? sn(y) : null),
              y !== null &&
                ((T = vn(y)), y !== T || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = u)),
          g !== y)
        ) {
          if (
            ((v = Mu),
            (x = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Au),
              (x = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (T = g == null ? d : Mn(g)),
            (h = y == null ? d : Mn(y)),
            (d = new v(x, p + "leave", g, n, c)),
            (d.target = T),
            (d.relatedTarget = h),
            (x = null),
            sn(c) === u &&
              ((v = new v(m, p + "enter", y, n, c)),
              (v.target = h),
              (v.relatedTarget = T),
              (x = v)),
            (T = x),
            g && y)
          )
            t: {
              for (v = g, m = y, p = 0, h = v; h; h = kn(h)) p++;
              for (h = 0, x = m; x; x = kn(x)) h++;
              for (; 0 < p - h; ) (v = kn(v)), p--;
              for (; 0 < h - p; ) (m = kn(m)), h--;
              for (; p--; ) {
                if (v === m || (m !== null && v === m.alternate)) break t;
                (v = kn(v)), (m = kn(m));
              }
              v = null;
            }
          else v = null;
          g !== null && Wu(f, d, g, v, !1),
            y !== null && T !== null && Wu(f, T, y, v, !0);
        }
      }
      e: {
        if (
          ((d = u ? Mn(u) : window),
          (g = d.nodeName && d.nodeName.toLowerCase()),
          g === "select" || (g === "input" && d.type === "file"))
        )
          var S = Xg;
        else if (Nu(d))
          if (Rd) S = bg;
          else {
            S = qg;
            var E = Zg;
          }
        else
          (g = d.nodeName) &&
            g.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (S = Jg);
        if (S && (S = S(e, u))) {
          Ad(f, S, n, c);
          break e;
        }
        E && E(e, d, u),
          e === "focusout" &&
            (E = d._wrapperState) &&
            E.controlled &&
            d.type === "number" &&
            Zs(d, "number", d.value);
      }
      switch (((E = u ? Mn(u) : window), e)) {
        case "focusin":
          (Nu(E) || E.contentEditable === "true") &&
            ((Ln = E), (al = u), (Cr = null));
          break;
        case "focusout":
          Cr = al = Ln = null;
          break;
        case "mousedown":
          ul = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ul = !1), zu(f, n, c);
          break;
        case "selectionchange":
          if (ny) break;
        case "keydown":
        case "keyup":
          zu(f, n, c);
      }
      var C;
      if (ma)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        En
          ? Md(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (Vd &&
          n.locale !== "ko" &&
          (En || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && En && (C = Ld())
            : ((Dt = c),
              (da = "value" in Dt ? Dt.value : Dt.textContent),
              (En = !0))),
        (E = ro(u, P)),
        0 < E.length &&
          ((P = new Du(P, e, null, n, c)),
          f.push({ event: P, listeners: E }),
          C ? (P.data = C) : ((C = Dd(n)), C !== null && (P.data = C)))),
        (C = $g ? Gg(e, n) : Kg(e, n)) &&
          ((u = ro(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Du("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = C)));
    }
    Wd(f, t);
  });
}
function $r(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ro(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Fr(e, n)),
      o != null && r.unshift($r(e, o, i)),
      (o = Fr(e, t)),
      o != null && r.push($r(e, o, i))),
      (e = e.return);
  }
  return r;
}
function kn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Wu(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = Fr(n, o)), a != null && s.unshift($r(n, a, l)))
        : i || ((a = Fr(n, o)), a != null && s.push($r(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var sy = /\r\n?/g,
  ly = /\u0000|\uFFFD/g;
function Hu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      sy,
      `
`
    )
    .replace(ly, "");
}
function ki(e, t, n) {
  if (((t = Hu(t)), Hu(e) !== t && n)) throw Error(k(425));
}
function io() {}
var cl = null,
  fl = null;
function dl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var pl = typeof setTimeout == "function" ? setTimeout : void 0,
  ay = typeof clearTimeout == "function" ? clearTimeout : void 0,
  $u = typeof Promise == "function" ? Promise : void 0,
  uy =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof $u < "u"
      ? function (e) {
          return $u.resolve(null).then(e).catch(cy);
        }
      : pl;
function cy(e) {
  setTimeout(function () {
    throw e;
  });
}
function xs(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Br(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Br(t);
}
function _t(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Gu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var rr = Math.random().toString(36).slice(2),
  it = "__reactFiber$" + rr,
  Gr = "__reactProps$" + rr,
  yt = "__reactContainer$" + rr,
  hl = "__reactEvents$" + rr,
  fy = "__reactListeners$" + rr,
  dy = "__reactHandles$" + rr;
function sn(e) {
  var t = e[it];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[yt] || n[it])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Gu(e); e !== null; ) {
          if ((n = e[it])) return n;
          e = Gu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function oi(e) {
  return (
    (e = e[it] || e[yt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Mn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function jo(e) {
  return e[Gr] || null;
}
var ml = [],
  Dn = -1;
function Qt(e) {
  return { current: e };
}
function H(e) {
  0 > Dn || ((e.current = ml[Dn]), (ml[Dn] = null), Dn--);
}
function U(e, t) {
  Dn++, (ml[Dn] = e.current), (e.current = t);
}
var Ht = {},
  ge = Qt(Ht),
  Ee = Qt(!1),
  dn = Ht;
function Qn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ht;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Le(e) {
  return (e = e.childContextTypes), e != null;
}
function oo() {
  H(Ee), H(ge);
}
function Ku(e, t, n) {
  if (ge.current !== Ht) throw Error(k(168));
  U(ge, t), U(Ee, n);
}
function $d(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(k(108, Zm(e) || "Unknown", i));
  return X({}, n, r);
}
function so(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ht),
    (dn = ge.current),
    U(ge, e),
    U(Ee, Ee.current),
    !0
  );
}
function Qu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = $d(e, t, dn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      H(Ee),
      H(ge),
      U(ge, e))
    : H(Ee),
    U(Ee, n);
}
var ct = null,
  No = !1,
  ws = !1;
function Gd(e) {
  ct === null ? (ct = [e]) : ct.push(e);
}
function py(e) {
  (No = !0), Gd(e);
}
function Yt() {
  if (!ws && ct !== null) {
    ws = !0;
    var e = 0,
      t = B;
    try {
      var n = ct;
      for (B = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (ct = null), (No = !1);
    } catch (i) {
      throw (ct !== null && (ct = ct.slice(e + 1)), gd(aa, Yt), i);
    } finally {
      (B = t), (ws = !1);
    }
  }
  return null;
}
var An = [],
  Rn = 0,
  lo = null,
  ao = 0,
  Be = [],
  Ue = 0,
  pn = null,
  ft = 1,
  dt = "";
function tn(e, t) {
  (An[Rn++] = ao), (An[Rn++] = lo), (lo = e), (ao = t);
}
function Kd(e, t, n) {
  (Be[Ue++] = ft), (Be[Ue++] = dt), (Be[Ue++] = pn), (pn = e);
  var r = ft;
  e = dt;
  var i = 32 - qe(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - qe(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (ft = (1 << (32 - qe(t) + i)) | (n << i) | r),
      (dt = o + e);
  } else (ft = (1 << o) | (n << i) | r), (dt = e);
}
function ya(e) {
  e.return !== null && (tn(e, 1), Kd(e, 1, 0));
}
function va(e) {
  for (; e === lo; )
    (lo = An[--Rn]), (An[Rn] = null), (ao = An[--Rn]), (An[Rn] = null);
  for (; e === pn; )
    (pn = Be[--Ue]),
      (Be[Ue] = null),
      (dt = Be[--Ue]),
      (Be[Ue] = null),
      (ft = Be[--Ue]),
      (Be[Ue] = null);
}
var Re = null,
  Ae = null,
  G = !1,
  Xe = null;
function Qd(e, t) {
  var n = We(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Yu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Re = e), (Ae = _t(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Re = e), (Ae = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = pn !== null ? { id: ft, overflow: dt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = We(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Re = e),
            (Ae = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function gl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function yl(e) {
  if (G) {
    var t = Ae;
    if (t) {
      var n = t;
      if (!Yu(e, t)) {
        if (gl(e)) throw Error(k(418));
        t = _t(n.nextSibling);
        var r = Re;
        t && Yu(e, t)
          ? Qd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (G = !1), (Re = e));
      }
    } else {
      if (gl(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (G = !1), (Re = e);
    }
  }
}
function Xu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Re = e;
}
function Pi(e) {
  if (e !== Re) return !1;
  if (!G) return Xu(e), (G = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !dl(e.type, e.memoizedProps))),
    t && (t = Ae))
  ) {
    if (gl(e)) throw (Yd(), Error(k(418)));
    for (; t; ) Qd(e, t), (t = _t(t.nextSibling));
  }
  if ((Xu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ae = _t(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ae = null;
    }
  } else Ae = Re ? _t(e.stateNode.nextSibling) : null;
  return !0;
}
function Yd() {
  for (var e = Ae; e; ) e = _t(e.nextSibling);
}
function Yn() {
  (Ae = Re = null), (G = !1);
}
function xa(e) {
  Xe === null ? (Xe = [e]) : Xe.push(e);
}
var hy = wt.ReactCurrentBatchConfig;
function Qe(e, t) {
  if (e && e.defaultProps) {
    (t = X({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var uo = Qt(null),
  co = null,
  jn = null,
  wa = null;
function Sa() {
  wa = jn = co = null;
}
function ka(e) {
  var t = uo.current;
  H(uo), (e._currentValue = t);
}
function vl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function $n(e, t) {
  (co = e),
    (wa = jn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Te = !0), (e.firstContext = null));
}
function $e(e) {
  var t = e._currentValue;
  if (wa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), jn === null)) {
      if (co === null) throw Error(k(308));
      (jn = e), (co.dependencies = { lanes: 0, firstContext: e });
    } else jn = jn.next = e;
  return t;
}
var ln = null;
function Pa(e) {
  ln === null ? (ln = [e]) : ln.push(e);
}
function Xd(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Pa(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    vt(e, r)
  );
}
function vt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Et = !1;
function Ca(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Zd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function ht(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ot(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      vt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Pa(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    vt(e, n)
  );
}
function zi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ua(e, n);
  }
}
function Zu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function fo(e, t, n, r) {
  var i = e.updateQueue;
  Et = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (o = u) : (s.next = u), (s = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (c = u = a = null), (l = o);
    do {
      var d = l.lane,
        g = l.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var y = e,
            v = l;
          switch (((d = t), (g = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == "function")) {
                f = y.call(g, f, d);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = v.payload),
                (d = typeof y == "function" ? y.call(g, f, d) : y),
                d == null)
              )
                break e;
              f = X({}, f, d);
              break e;
            case 2:
              Et = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [l]) : d.push(l));
      } else
        (g = {
          eventTime: g,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (a = f)) : (c = c.next = g),
          (s |= d);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (d = l),
          (l = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (a = f),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (mn |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function qu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(k(191, i));
        i.call(r);
      }
    }
}
var qd = new Xf.Component().refs;
function xl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : X({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var _o = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? vn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Se(),
      i = It(e),
      o = ht(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Ot(e, o, i)),
      t !== null && (Je(t, e, i, r), zi(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Se(),
      i = It(e),
      o = ht(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Ot(e, o, i)),
      t !== null && (Je(t, e, i, r), zi(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Se(),
      r = It(e),
      i = ht(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Ot(e, i, r)),
      t !== null && (Je(t, e, r, n), zi(t, e, r));
  },
};
function Ju(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Wr(n, r) || !Wr(i, o)
      : !0
  );
}
function Jd(e, t, n) {
  var r = !1,
    i = Ht,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = $e(o))
      : ((i = Le(t) ? dn : ge.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Qn(e, i) : Ht)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = _o),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function bu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && _o.enqueueReplaceState(t, t.state, null);
}
function wl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = qd), Ca(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = $e(o))
    : ((o = Le(t) ? dn : ge.current), (i.context = Qn(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (xl(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && _o.enqueueReplaceState(i, i.state, null),
      fo(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function ur(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var l = i.refs;
            l === qd && (l = i.refs = {}),
              s === null ? delete l[o] : (l[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function Ci(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function ec(e) {
  var t = e._init;
  return t(e._payload);
}
function bd(e) {
  function t(m, p) {
    if (e) {
      var h = m.deletions;
      h === null ? ((m.deletions = [p]), (m.flags |= 16)) : h.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), (p = p.sibling);
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
    return m;
  }
  function i(m, p) {
    return (m = zt(m, p)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, p, h) {
    return (
      (m.index = h),
      e
        ? ((h = m.alternate),
          h !== null
            ? ((h = h.index), h < p ? ((m.flags |= 2), p) : h)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, p, h, x) {
    return p === null || p.tag !== 6
      ? ((p = Ls(h, m.mode, x)), (p.return = m), p)
      : ((p = i(p, h)), (p.return = m), p);
  }
  function a(m, p, h, x) {
    var S = h.type;
    return S === Tn
      ? c(m, p, h.props.children, x, h.key)
      : p !== null &&
        (p.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === Tt &&
            ec(S) === p.type))
      ? ((x = i(p, h.props)), (x.ref = ur(m, p, h)), (x.return = m), x)
      : ((x = Gi(h.type, h.key, h.props, null, m.mode, x)),
        (x.ref = ur(m, p, h)),
        (x.return = m),
        x);
  }
  function u(m, p, h, x) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== h.containerInfo ||
      p.stateNode.implementation !== h.implementation
      ? ((p = Vs(h, m.mode, x)), (p.return = m), p)
      : ((p = i(p, h.children || [])), (p.return = m), p);
  }
  function c(m, p, h, x, S) {
    return p === null || p.tag !== 7
      ? ((p = fn(h, m.mode, x, S)), (p.return = m), p)
      : ((p = i(p, h)), (p.return = m), p);
  }
  function f(m, p, h) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Ls("" + p, m.mode, h)), (p.return = m), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case pi:
          return (
            (h = Gi(p.type, p.key, p.props, null, m.mode, h)),
            (h.ref = ur(m, null, p)),
            (h.return = m),
            h
          );
        case Cn:
          return (p = Vs(p, m.mode, h)), (p.return = m), p;
        case Tt:
          var x = p._init;
          return f(m, x(p._payload), h);
      }
      if (gr(p) || ir(p))
        return (p = fn(p, m.mode, h, null)), (p.return = m), p;
      Ci(m, p);
    }
    return null;
  }
  function d(m, p, h, x) {
    var S = p !== null ? p.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return S !== null ? null : l(m, p, "" + h, x);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case pi:
          return h.key === S ? a(m, p, h, x) : null;
        case Cn:
          return h.key === S ? u(m, p, h, x) : null;
        case Tt:
          return (S = h._init), d(m, p, S(h._payload), x);
      }
      if (gr(h) || ir(h)) return S !== null ? null : c(m, p, h, x, null);
      Ci(m, h);
    }
    return null;
  }
  function g(m, p, h, x, S) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (m = m.get(h) || null), l(p, m, "" + x, S);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case pi:
          return (m = m.get(x.key === null ? h : x.key) || null), a(p, m, x, S);
        case Cn:
          return (m = m.get(x.key === null ? h : x.key) || null), u(p, m, x, S);
        case Tt:
          var E = x._init;
          return g(m, p, h, E(x._payload), S);
      }
      if (gr(x) || ir(x)) return (m = m.get(h) || null), c(p, m, x, S, null);
      Ci(p, x);
    }
    return null;
  }
  function y(m, p, h, x) {
    for (
      var S = null, E = null, C = p, P = (p = 0), N = null;
      C !== null && P < h.length;
      P++
    ) {
      C.index > P ? ((N = C), (C = null)) : (N = C.sibling);
      var R = d(m, C, h[P], x);
      if (R === null) {
        C === null && (C = N);
        break;
      }
      e && C && R.alternate === null && t(m, C),
        (p = o(R, p, P)),
        E === null ? (S = R) : (E.sibling = R),
        (E = R),
        (C = N);
    }
    if (P === h.length) return n(m, C), G && tn(m, P), S;
    if (C === null) {
      for (; P < h.length; P++)
        (C = f(m, h[P], x)),
          C !== null &&
            ((p = o(C, p, P)), E === null ? (S = C) : (E.sibling = C), (E = C));
      return G && tn(m, P), S;
    }
    for (C = r(m, C); P < h.length; P++)
      (N = g(C, m, P, h[P], x)),
        N !== null &&
          (e && N.alternate !== null && C.delete(N.key === null ? P : N.key),
          (p = o(N, p, P)),
          E === null ? (S = N) : (E.sibling = N),
          (E = N));
    return (
      e &&
        C.forEach(function (oe) {
          return t(m, oe);
        }),
      G && tn(m, P),
      S
    );
  }
  function v(m, p, h, x) {
    var S = ir(h);
    if (typeof S != "function") throw Error(k(150));
    if (((h = S.call(h)), h == null)) throw Error(k(151));
    for (
      var E = (S = null), C = p, P = (p = 0), N = null, R = h.next();
      C !== null && !R.done;
      P++, R = h.next()
    ) {
      C.index > P ? ((N = C), (C = null)) : (N = C.sibling);
      var oe = d(m, C, R.value, x);
      if (oe === null) {
        C === null && (C = N);
        break;
      }
      e && C && oe.alternate === null && t(m, C),
        (p = o(oe, p, P)),
        E === null ? (S = oe) : (E.sibling = oe),
        (E = oe),
        (C = N);
    }
    if (R.done) return n(m, C), G && tn(m, P), S;
    if (C === null) {
      for (; !R.done; P++, R = h.next())
        (R = f(m, R.value, x)),
          R !== null &&
            ((p = o(R, p, P)), E === null ? (S = R) : (E.sibling = R), (E = R));
      return G && tn(m, P), S;
    }
    for (C = r(m, C); !R.done; P++, R = h.next())
      (R = g(C, m, P, R.value, x)),
        R !== null &&
          (e && R.alternate !== null && C.delete(R.key === null ? P : R.key),
          (p = o(R, p, P)),
          E === null ? (S = R) : (E.sibling = R),
          (E = R));
    return (
      e &&
        C.forEach(function (ue) {
          return t(m, ue);
        }),
      G && tn(m, P),
      S
    );
  }
  function T(m, p, h, x) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === Tn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case pi:
          e: {
            for (var S = h.key, E = p; E !== null; ) {
              if (E.key === S) {
                if (((S = h.type), S === Tn)) {
                  if (E.tag === 7) {
                    n(m, E.sibling),
                      (p = i(E, h.props.children)),
                      (p.return = m),
                      (m = p);
                    break e;
                  }
                } else if (
                  E.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === Tt &&
                    ec(S) === E.type)
                ) {
                  n(m, E.sibling),
                    (p = i(E, h.props)),
                    (p.ref = ur(m, E, h)),
                    (p.return = m),
                    (m = p);
                  break e;
                }
                n(m, E);
                break;
              } else t(m, E);
              E = E.sibling;
            }
            h.type === Tn
              ? ((p = fn(h.props.children, m.mode, x, h.key)),
                (p.return = m),
                (m = p))
              : ((x = Gi(h.type, h.key, h.props, null, m.mode, x)),
                (x.ref = ur(m, p, h)),
                (x.return = m),
                (m = x));
          }
          return s(m);
        case Cn:
          e: {
            for (E = h.key; p !== null; ) {
              if (p.key === E)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === h.containerInfo &&
                  p.stateNode.implementation === h.implementation
                ) {
                  n(m, p.sibling),
                    (p = i(p, h.children || [])),
                    (p.return = m),
                    (m = p);
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            (p = Vs(h, m.mode, x)), (p.return = m), (m = p);
          }
          return s(m);
        case Tt:
          return (E = h._init), T(m, p, E(h._payload), x);
      }
      if (gr(h)) return y(m, p, h, x);
      if (ir(h)) return v(m, p, h, x);
      Ci(m, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = i(p, h)), (p.return = m), (m = p))
          : (n(m, p), (p = Ls(h, m.mode, x)), (p.return = m), (m = p)),
        s(m))
      : n(m, p);
  }
  return T;
}
var Xn = bd(!0),
  ep = bd(!1),
  si = {},
  st = Qt(si),
  Kr = Qt(si),
  Qr = Qt(si);
function an(e) {
  if (e === si) throw Error(k(174));
  return e;
}
function Ta(e, t) {
  switch ((U(Qr, t), U(Kr, e), U(st, si), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Js(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Js(t, e));
  }
  H(st), U(st, t);
}
function Zn() {
  H(st), H(Kr), H(Qr);
}
function tp(e) {
  an(Qr.current);
  var t = an(st.current),
    n = Js(t, e.type);
  t !== n && (U(Kr, e), U(st, n));
}
function Ea(e) {
  Kr.current === e && (H(st), H(Kr));
}
var K = Qt(0);
function po(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ss = [];
function La() {
  for (var e = 0; e < Ss.length; e++)
    Ss[e]._workInProgressVersionPrimary = null;
  Ss.length = 0;
}
var Bi = wt.ReactCurrentDispatcher,
  ks = wt.ReactCurrentBatchConfig,
  hn = 0,
  Y = null,
  re = null,
  le = null,
  ho = !1,
  Tr = !1,
  Yr = 0,
  my = 0;
function pe() {
  throw Error(k(321));
}
function Va(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!be(e[n], t[n])) return !1;
  return !0;
}
function Ma(e, t, n, r, i, o) {
  if (
    ((hn = o),
    (Y = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Bi.current = e === null || e.memoizedState === null ? xy : wy),
    (e = n(r, i)),
    Tr)
  ) {
    o = 0;
    do {
      if (((Tr = !1), (Yr = 0), 25 <= o)) throw Error(k(301));
      (o += 1),
        (le = re = null),
        (t.updateQueue = null),
        (Bi.current = Sy),
        (e = n(r, i));
    } while (Tr);
  }
  if (
    ((Bi.current = mo),
    (t = re !== null && re.next !== null),
    (hn = 0),
    (le = re = Y = null),
    (ho = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function Da() {
  var e = Yr !== 0;
  return (Yr = 0), e;
}
function rt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return le === null ? (Y.memoizedState = le = e) : (le = le.next = e), le;
}
function Ge() {
  if (re === null) {
    var e = Y.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = re.next;
  var t = le === null ? Y.memoizedState : le.next;
  if (t !== null) (le = t), (re = e);
  else {
    if (e === null) throw Error(k(310));
    (re = e),
      (e = {
        memoizedState: re.memoizedState,
        baseState: re.baseState,
        baseQueue: re.baseQueue,
        queue: re.queue,
        next: null,
      }),
      le === null ? (Y.memoizedState = le = e) : (le = le.next = e);
  }
  return le;
}
function Xr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ps(e) {
  var t = Ge(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = re,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = o;
    do {
      var c = u.lane;
      if ((hn & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = f), (s = r)) : (a = a.next = f),
          (Y.lanes |= c),
          (mn |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? (s = r) : (a.next = l),
      be(r, t.memoizedState) || (Te = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (Y.lanes |= o), (mn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Cs(e) {
  var t = Ge(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    be(o, t.memoizedState) || (Te = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function np() {}
function rp(e, t) {
  var n = Y,
    r = Ge(),
    i = t(),
    o = !be(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Te = !0)),
    (r = r.queue),
    Aa(sp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (le !== null && le.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Zr(9, op.bind(null, n, r, i, t), void 0, null),
      ae === null)
    )
      throw Error(k(349));
    hn & 30 || ip(n, t, i);
  }
  return i;
}
function ip(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function op(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), lp(t) && ap(e);
}
function sp(e, t, n) {
  return n(function () {
    lp(t) && ap(e);
  });
}
function lp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !be(e, n);
  } catch {
    return !0;
  }
}
function ap(e) {
  var t = vt(e, 1);
  t !== null && Je(t, e, 1, -1);
}
function tc(e) {
  var t = rt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Xr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = vy.bind(null, Y, e)),
    [t.memoizedState, e]
  );
}
function Zr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function up() {
  return Ge().memoizedState;
}
function Ui(e, t, n, r) {
  var i = rt();
  (Y.flags |= e),
    (i.memoizedState = Zr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Oo(e, t, n, r) {
  var i = Ge();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (re !== null) {
    var s = re.memoizedState;
    if (((o = s.destroy), r !== null && Va(r, s.deps))) {
      i.memoizedState = Zr(t, n, o, r);
      return;
    }
  }
  (Y.flags |= e), (i.memoizedState = Zr(1 | t, n, o, r));
}
function nc(e, t) {
  return Ui(8390656, 8, e, t);
}
function Aa(e, t) {
  return Oo(2048, 8, e, t);
}
function cp(e, t) {
  return Oo(4, 2, e, t);
}
function fp(e, t) {
  return Oo(4, 4, e, t);
}
function dp(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function pp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Oo(4, 4, dp.bind(null, t, e), n)
  );
}
function Ra() {}
function hp(e, t) {
  var n = Ge();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Va(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function mp(e, t) {
  var n = Ge();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Va(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function gp(e, t, n) {
  return hn & 21
    ? (be(n, t) || ((n = xd()), (Y.lanes |= n), (mn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Te = !0)), (e.memoizedState = n));
}
function gy(e, t) {
  var n = B;
  (B = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ks.transition;
  ks.transition = {};
  try {
    e(!1), t();
  } finally {
    (B = n), (ks.transition = r);
  }
}
function yp() {
  return Ge().memoizedState;
}
function yy(e, t, n) {
  var r = It(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    vp(e))
  )
    xp(t, n);
  else if (((n = Xd(e, t, n, r)), n !== null)) {
    var i = Se();
    Je(n, e, r, i), wp(n, t, r);
  }
}
function vy(e, t, n) {
  var r = It(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (vp(e)) xp(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), be(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), Pa(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Xd(e, t, i, r)),
      n !== null && ((i = Se()), Je(n, e, r, i), wp(n, t, r));
  }
}
function vp(e) {
  var t = e.alternate;
  return e === Y || (t !== null && t === Y);
}
function xp(e, t) {
  Tr = ho = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function wp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ua(e, n);
  }
}
var mo = {
    readContext: $e,
    useCallback: pe,
    useContext: pe,
    useEffect: pe,
    useImperativeHandle: pe,
    useInsertionEffect: pe,
    useLayoutEffect: pe,
    useMemo: pe,
    useReducer: pe,
    useRef: pe,
    useState: pe,
    useDebugValue: pe,
    useDeferredValue: pe,
    useTransition: pe,
    useMutableSource: pe,
    useSyncExternalStore: pe,
    useId: pe,
    unstable_isNewReconciler: !1,
  },
  xy = {
    readContext: $e,
    useCallback: function (e, t) {
      return (rt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: $e,
    useEffect: nc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ui(4194308, 4, dp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ui(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ui(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = rt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = rt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = yy.bind(null, Y, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = rt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: tc,
    useDebugValue: Ra,
    useDeferredValue: function (e) {
      return (rt().memoizedState = e);
    },
    useTransition: function () {
      var e = tc(!1),
        t = e[0];
      return (e = gy.bind(null, e[1])), (rt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Y,
        i = rt();
      if (G) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), ae === null)) throw Error(k(349));
        hn & 30 || ip(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        nc(sp.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Zr(9, op.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = rt(),
        t = ae.identifierPrefix;
      if (G) {
        var n = dt,
          r = ft;
        (n = (r & ~(1 << (32 - qe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Yr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = my++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  wy = {
    readContext: $e,
    useCallback: hp,
    useContext: $e,
    useEffect: Aa,
    useImperativeHandle: pp,
    useInsertionEffect: cp,
    useLayoutEffect: fp,
    useMemo: mp,
    useReducer: Ps,
    useRef: up,
    useState: function () {
      return Ps(Xr);
    },
    useDebugValue: Ra,
    useDeferredValue: function (e) {
      var t = Ge();
      return gp(t, re.memoizedState, e);
    },
    useTransition: function () {
      var e = Ps(Xr)[0],
        t = Ge().memoizedState;
      return [e, t];
    },
    useMutableSource: np,
    useSyncExternalStore: rp,
    useId: yp,
    unstable_isNewReconciler: !1,
  },
  Sy = {
    readContext: $e,
    useCallback: hp,
    useContext: $e,
    useEffect: Aa,
    useImperativeHandle: pp,
    useInsertionEffect: cp,
    useLayoutEffect: fp,
    useMemo: mp,
    useReducer: Cs,
    useRef: up,
    useState: function () {
      return Cs(Xr);
    },
    useDebugValue: Ra,
    useDeferredValue: function (e) {
      var t = Ge();
      return re === null ? (t.memoizedState = e) : gp(t, re.memoizedState, e);
    },
    useTransition: function () {
      var e = Cs(Xr)[0],
        t = Ge().memoizedState;
      return [e, t];
    },
    useMutableSource: np,
    useSyncExternalStore: rp,
    useId: yp,
    unstable_isNewReconciler: !1,
  };
function qn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Xm(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Ts(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Sl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var ky = typeof WeakMap == "function" ? WeakMap : Map;
function Sp(e, t, n) {
  (n = ht(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      yo || ((yo = !0), (Al = r)), Sl(e, t);
    }),
    n
  );
}
function kp(e, t, n) {
  (n = ht(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Sl(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Sl(e, t),
          typeof r != "function" &&
            (Ft === null ? (Ft = new Set([this])) : Ft.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function rc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ky();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Oy.bind(null, e, t, n)), t.then(e, e));
}
function ic(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function oc(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = ht(-1, 1)), (t.tag = 2), Ot(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Py = wt.ReactCurrentOwner,
  Te = !1;
function we(e, t, n, r) {
  t.child = e === null ? ep(t, null, n, r) : Xn(t, e.child, n, r);
}
function sc(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    $n(t, i),
    (r = Ma(e, t, n, r, o, i)),
    (n = Da()),
    e !== null && !Te
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        xt(e, t, i))
      : (G && n && ya(t), (t.flags |= 1), we(e, t, r, i), t.child)
  );
}
function lc(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Ba(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Pp(e, t, o, r, i))
      : ((e = Gi(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Wr), n(s, r) && e.ref === t.ref)
    )
      return xt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = zt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Pp(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Wr(o, r) && e.ref === t.ref)
      if (((Te = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Te = !0);
      else return (t.lanes = e.lanes), xt(e, t, i);
  }
  return kl(e, t, n, r, i);
}
function Cp(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        U(_n, De),
        (De |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          U(_n, De),
          (De |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        U(_n, De),
        (De |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      U(_n, De),
      (De |= r);
  return we(e, t, i, n), t.child;
}
function Tp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function kl(e, t, n, r, i) {
  var o = Le(n) ? dn : ge.current;
  return (
    (o = Qn(t, o)),
    $n(t, i),
    (n = Ma(e, t, n, r, o, i)),
    (r = Da()),
    e !== null && !Te
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        xt(e, t, i))
      : (G && r && ya(t), (t.flags |= 1), we(e, t, n, i), t.child)
  );
}
function ac(e, t, n, r, i) {
  if (Le(n)) {
    var o = !0;
    so(t);
  } else o = !1;
  if (($n(t, i), t.stateNode === null))
    Wi(e, t), Jd(t, n, r), wl(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = $e(u))
      : ((u = Le(n) ? dn : ge.current), (u = Qn(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && bu(t, s, r, u)),
      (Et = !1);
    var d = t.memoizedState;
    (s.state = d),
      fo(t, r, s, i),
      (a = t.memoizedState),
      l !== r || d !== a || Ee.current || Et
        ? (typeof c == "function" && (xl(t, n, c, r), (a = t.memoizedState)),
          (l = Et || Ju(t, n, l, r, d, a, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Zd(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Qe(t.type, l)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = $e(a))
        : ((a = Le(n) ? dn : ge.current), (a = Qn(t, a)));
    var g = n.getDerivedStateFromProps;
    (c =
      typeof g == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== f || d !== a) && bu(t, s, r, a)),
      (Et = !1),
      (d = t.memoizedState),
      (s.state = d),
      fo(t, r, s, i);
    var y = t.memoizedState;
    l !== f || d !== y || Ee.current || Et
      ? (typeof g == "function" && (xl(t, n, g, r), (y = t.memoizedState)),
        (u = Et || Ju(t, n, u, r, d, y, a) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, y, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, y, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Pl(e, t, n, r, o, i);
}
function Pl(e, t, n, r, i, o) {
  Tp(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Qu(t, n, !1), xt(e, t, o);
  (r = t.stateNode), (Py.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Xn(t, e.child, null, o)), (t.child = Xn(t, null, l, o)))
      : we(e, t, l, o),
    (t.memoizedState = r.state),
    i && Qu(t, n, !0),
    t.child
  );
}
function Ep(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ku(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ku(e, t.context, !1),
    Ta(e, t.containerInfo);
}
function uc(e, t, n, r, i) {
  return Yn(), xa(i), (t.flags |= 256), we(e, t, n, r), t.child;
}
var Cl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Tl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Lp(e, t, n) {
  var r = t.pendingProps,
    i = K.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    U(K, i & 1),
    e === null)
  )
    return (
      yl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = zo(s, r, 0, null)),
              (e = fn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Tl(n)),
              (t.memoizedState = Cl),
              e)
            : ja(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return Cy(e, t, s, r, l, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = zt(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = zt(l, o)) : ((o = fn(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Tl(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Cl),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = zt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ja(e, t) {
  return (
    (t = zo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ti(e, t, n, r) {
  return (
    r !== null && xa(r),
    Xn(t, e.child, null, n),
    (e = ja(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Cy(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ts(Error(k(422)))), Ti(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = zo({ mode: "visible", children: r.children }, i, 0, null)),
        (o = fn(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Xn(t, e.child, null, s),
        (t.child.memoizedState = Tl(s)),
        (t.memoizedState = Cl),
        o);
  if (!(t.mode & 1)) return Ti(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(k(419))), (r = Ts(o, r, void 0)), Ti(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), Te || l)) {
    if (((r = ae), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), vt(e, i), Je(r, e, i, -1));
    }
    return za(), (r = Ts(Error(k(421)))), Ti(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Fy.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ae = _t(i.nextSibling)),
      (Re = t),
      (G = !0),
      (Xe = null),
      e !== null &&
        ((Be[Ue++] = ft),
        (Be[Ue++] = dt),
        (Be[Ue++] = pn),
        (ft = e.id),
        (dt = e.overflow),
        (pn = t)),
      (t = ja(t, r.children)),
      (t.flags |= 4096),
      t);
}
function cc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), vl(e.return, t, n);
}
function Es(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Vp(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((we(e, t, r.children, n), (r = K.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && cc(e, n, t);
        else if (e.tag === 19) cc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((U(K, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && po(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Es(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && po(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Es(t, !0, n, null, o);
        break;
      case "together":
        Es(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Wi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function xt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (mn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = zt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = zt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Ty(e, t, n) {
  switch (t.tag) {
    case 3:
      Ep(t), Yn();
      break;
    case 5:
      tp(t);
      break;
    case 1:
      Le(t.type) && so(t);
      break;
    case 4:
      Ta(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      U(uo, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (U(K, K.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Lp(e, t, n)
          : (U(K, K.current & 1),
            (e = xt(e, t, n)),
            e !== null ? e.sibling : null);
      U(K, K.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Vp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        U(K, K.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Cp(e, t, n);
  }
  return xt(e, t, n);
}
var Mp, El, Dp, Ap;
Mp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
El = function () {};
Dp = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), an(st.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Ys(e, i)), (r = Ys(e, r)), (o = []);
        break;
      case "select":
        (i = X({}, i, { value: void 0 })),
          (r = X({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = qs(e, i)), (r = qs(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = io);
    }
    bs(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (_r.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (o = o || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (_r.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && W("scroll", e),
                  o || l === a || (o = []))
                : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Ap = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function cr(e, t) {
  if (!G)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function he(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Ey(e, t, n) {
  var r = t.pendingProps;
  switch ((va(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return he(t), null;
    case 1:
      return Le(t.type) && oo(), he(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Zn(),
        H(Ee),
        H(ge),
        La(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Pi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Xe !== null && (Nl(Xe), (Xe = null)))),
        El(e, t),
        he(t),
        null
      );
    case 5:
      Ea(t);
      var i = an(Qr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Dp(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return he(t), null;
        }
        if (((e = an(st.current)), Pi(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[it] = t), (r[Gr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              W("cancel", r), W("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              W("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < vr.length; i++) W(vr[i], r);
              break;
            case "source":
              W("error", r);
              break;
            case "img":
            case "image":
            case "link":
              W("error", r), W("load", r);
              break;
            case "details":
              W("toggle", r);
              break;
            case "input":
              xu(r, o), W("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                W("invalid", r);
              break;
            case "textarea":
              Su(r, o), W("invalid", r);
          }
          bs(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      ki(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      ki(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : _r.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  W("scroll", r);
            }
          switch (n) {
            case "input":
              hi(r), wu(r, o, !0);
              break;
            case "textarea":
              hi(r), ku(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = io);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = id(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[it] = t),
            (e[Gr] = r),
            Mp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = el(n, r)), n)) {
              case "dialog":
                W("cancel", e), W("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                W("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < vr.length; i++) W(vr[i], e);
                i = r;
                break;
              case "source":
                W("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                W("error", e), W("load", e), (i = r);
                break;
              case "details":
                W("toggle", e), (i = r);
                break;
              case "input":
                xu(e, r), (i = Ys(e, r)), W("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = X({}, r, { value: void 0 })),
                  W("invalid", e);
                break;
              case "textarea":
                Su(e, r), (i = qs(e, r)), W("invalid", e);
                break;
              default:
                i = r;
            }
            bs(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var a = l[o];
                o === "style"
                  ? ld(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && od(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Or(e, a)
                    : typeof a == "number" && Or(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (_r.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && W("scroll", e)
                      : a != null && ra(e, o, a, s));
              }
            switch (n) {
              case "input":
                hi(e), wu(e, r, !1);
                break;
              case "textarea":
                hi(e), ku(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Wt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Bn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Bn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = io);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return he(t), null;
    case 6:
      if (e && t.stateNode != null) Ap(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = an(Qr.current)), an(st.current), Pi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[it] = t),
            (o = r.nodeValue !== n) && ((e = Re), e !== null))
          )
            switch (e.tag) {
              case 3:
                ki(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ki(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[it] = t),
            (t.stateNode = r);
      }
      return he(t), null;
    case 13:
      if (
        (H(K),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (G && Ae !== null && t.mode & 1 && !(t.flags & 128))
          Yd(), Yn(), (t.flags |= 98560), (o = !1);
        else if (((o = Pi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(k(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(k(317));
            o[it] = t;
          } else
            Yn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          he(t), (o = !1);
        } else Xe !== null && (Nl(Xe), (Xe = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || K.current & 1 ? ie === 0 && (ie = 3) : za())),
          t.updateQueue !== null && (t.flags |= 4),
          he(t),
          null);
    case 4:
      return (
        Zn(), El(e, t), e === null && Hr(t.stateNode.containerInfo), he(t), null
      );
    case 10:
      return ka(t.type._context), he(t), null;
    case 17:
      return Le(t.type) && oo(), he(t), null;
    case 19:
      if ((H(K), (o = t.memoizedState), o === null)) return he(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) cr(o, !1);
        else {
          if (ie !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = po(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    cr(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return U(K, (K.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            b() > Jn &&
            ((t.flags |= 128), (r = !0), cr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = po(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              cr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !G)
            )
              return he(t), null;
          } else
            2 * b() - o.renderingStartTime > Jn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), cr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = b()),
          (t.sibling = null),
          (n = K.current),
          U(K, r ? (n & 1) | 2 : n & 1),
          t)
        : (he(t), null);
    case 22:
    case 23:
      return (
        Ia(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? De & 1073741824 && (he(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : he(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function Ly(e, t) {
  switch ((va(t), t.tag)) {
    case 1:
      return (
        Le(t.type) && oo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Zn(),
        H(Ee),
        H(ge),
        La(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ea(t), null;
    case 13:
      if ((H(K), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        Yn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return H(K), null;
    case 4:
      return Zn(), null;
    case 10:
      return ka(t.type._context), null;
    case 22:
    case 23:
      return Ia(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ei = !1,
  me = !1,
  Vy = typeof WeakSet == "function" ? WeakSet : Set,
  V = null;
function Nn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Z(e, t, r);
      }
    else n.current = null;
}
function Ll(e, t, n) {
  try {
    n();
  } catch (r) {
    Z(e, t, r);
  }
}
var fc = !1;
function My(e, t) {
  if (((cl = to), (e = _d()), ga(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var g;
              f !== n || (i !== 0 && f.nodeType !== 3) || (l = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (a = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              (d = f), (f = g);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (l = s),
                d === o && ++c === r && (a = s),
                (g = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = g;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (fl = { focusedElem: e, selectionRange: n }, to = !1, V = t; V !== null; )
    if (((t = V), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (V = e);
    else
      for (; V !== null; ) {
        t = V;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var v = y.memoizedProps,
                    T = y.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Qe(t.type, v),
                      T
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (x) {
          Z(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (V = e);
          break;
        }
        V = t.return;
      }
  return (y = fc), (fc = !1), y;
}
function Er(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Ll(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Fo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Vl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Rp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Rp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[it], delete t[Gr], delete t[hl], delete t[fy], delete t[dy])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function jp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function dc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || jp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ml(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = io));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ml(e, t, n), e = e.sibling; e !== null; ) Ml(e, t, n), (e = e.sibling);
}
function Dl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Dl(e, t, n), e = e.sibling; e !== null; ) Dl(e, t, n), (e = e.sibling);
}
var ce = null,
  Ye = !1;
function kt(e, t, n) {
  for (n = n.child; n !== null; ) Np(e, t, n), (n = n.sibling);
}
function Np(e, t, n) {
  if (ot && typeof ot.onCommitFiberUnmount == "function")
    try {
      ot.onCommitFiberUnmount(Mo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      me || Nn(n, t);
    case 6:
      var r = ce,
        i = Ye;
      (ce = null),
        kt(e, t, n),
        (ce = r),
        (Ye = i),
        ce !== null &&
          (Ye
            ? ((e = ce),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ce.removeChild(n.stateNode));
      break;
    case 18:
      ce !== null &&
        (Ye
          ? ((e = ce),
            (n = n.stateNode),
            e.nodeType === 8
              ? xs(e.parentNode, n)
              : e.nodeType === 1 && xs(e, n),
            Br(e))
          : xs(ce, n.stateNode));
      break;
    case 4:
      (r = ce),
        (i = Ye),
        (ce = n.stateNode.containerInfo),
        (Ye = !0),
        kt(e, t, n),
        (ce = r),
        (Ye = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !me &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && Ll(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      kt(e, t, n);
      break;
    case 1:
      if (
        !me &&
        (Nn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Z(n, t, l);
        }
      kt(e, t, n);
      break;
    case 21:
      kt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((me = (r = me) || n.memoizedState !== null), kt(e, t, n), (me = r))
        : kt(e, t, n);
      break;
    default:
      kt(e, t, n);
  }
}
function pc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Vy()),
      t.forEach(function (r) {
        var i = Iy.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Ke(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (ce = l.stateNode), (Ye = !1);
              break e;
            case 3:
              (ce = l.stateNode.containerInfo), (Ye = !0);
              break e;
            case 4:
              (ce = l.stateNode.containerInfo), (Ye = !0);
              break e;
          }
          l = l.return;
        }
        if (ce === null) throw Error(k(160));
        Np(o, s, i), (ce = null), (Ye = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        Z(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) _p(t, e), (t = t.sibling);
}
function _p(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ke(t, e), nt(e), r & 4)) {
        try {
          Er(3, e, e.return), Fo(3, e);
        } catch (v) {
          Z(e, e.return, v);
        }
        try {
          Er(5, e, e.return);
        } catch (v) {
          Z(e, e.return, v);
        }
      }
      break;
    case 1:
      Ke(t, e), nt(e), r & 512 && n !== null && Nn(n, n.return);
      break;
    case 5:
      if (
        (Ke(t, e),
        nt(e),
        r & 512 && n !== null && Nn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Or(i, "");
        } catch (v) {
          Z(e, e.return, v);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && nd(i, o),
              el(l, s);
            var u = el(l, o);
            for (s = 0; s < a.length; s += 2) {
              var c = a[s],
                f = a[s + 1];
              c === "style"
                ? ld(i, f)
                : c === "dangerouslySetInnerHTML"
                ? od(i, f)
                : c === "children"
                ? Or(i, f)
                : ra(i, c, f, u);
            }
            switch (l) {
              case "input":
                Xs(i, o);
                break;
              case "textarea":
                rd(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? Bn(i, !!o.multiple, g, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Bn(i, !!o.multiple, o.defaultValue, !0)
                      : Bn(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Gr] = o;
          } catch (v) {
            Z(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Ke(t, e), nt(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (v) {
          Z(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Ke(t, e), nt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Br(t.containerInfo);
        } catch (v) {
          Z(e, e.return, v);
        }
      break;
    case 4:
      Ke(t, e), nt(e);
      break;
    case 13:
      Ke(t, e),
        nt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Oa = b())),
        r & 4 && pc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((me = (u = me) || c), Ke(t, e), (me = u)) : Ke(t, e),
        nt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (V = e, c = e.child; c !== null; ) {
            for (f = V = c; V !== null; ) {
              switch (((d = V), (g = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Er(4, d, d.return);
                  break;
                case 1:
                  Nn(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (v) {
                      Z(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Nn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    mc(f);
                    continue;
                  }
              }
              g !== null ? ((g.return = d), (V = g)) : mc(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = f.stateNode),
                      (a = f.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = sd("display", s)));
              } catch (v) {
                Z(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (v) {
                Z(e, e.return, v);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Ke(t, e), nt(e), r & 4 && pc(e);
      break;
    case 21:
      break;
    default:
      Ke(t, e), nt(e);
  }
}
function nt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (jp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Or(i, ""), (r.flags &= -33));
          var o = dc(e);
          Dl(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = dc(e);
          Ml(e, l, s);
          break;
        default:
          throw Error(k(161));
      }
    } catch (a) {
      Z(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Dy(e, t, n) {
  (V = e), Op(e);
}
function Op(e, t, n) {
  for (var r = (e.mode & 1) !== 0; V !== null; ) {
    var i = V,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Ei;
      if (!s) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || me;
        l = Ei;
        var u = me;
        if (((Ei = s), (me = a) && !u))
          for (V = i; V !== null; )
            (s = V),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? gc(i)
                : a !== null
                ? ((a.return = s), (V = a))
                : gc(i);
        for (; o !== null; ) (V = o), Op(o), (o = o.sibling);
        (V = i), (Ei = l), (me = u);
      }
      hc(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (V = o)) : hc(e);
  }
}
function hc(e) {
  for (; V !== null; ) {
    var t = V;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              me || Fo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !me)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Qe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && qu(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                qu(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Br(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
        me || (t.flags & 512 && Vl(t));
      } catch (d) {
        Z(t, t.return, d);
      }
    }
    if (t === e) {
      V = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function mc(e) {
  for (; V !== null; ) {
    var t = V;
    if (t === e) {
      V = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function gc(e) {
  for (; V !== null; ) {
    var t = V;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Fo(4, t);
          } catch (a) {
            Z(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Z(t, i, a);
            }
          }
          var o = t.return;
          try {
            Vl(t);
          } catch (a) {
            Z(t, o, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Vl(t);
          } catch (a) {
            Z(t, s, a);
          }
      }
    } catch (a) {
      Z(t, t.return, a);
    }
    if (t === e) {
      V = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (V = l);
      break;
    }
    V = t.return;
  }
}
var Ay = Math.ceil,
  go = wt.ReactCurrentDispatcher,
  Na = wt.ReactCurrentOwner,
  He = wt.ReactCurrentBatchConfig,
  I = 0,
  ae = null,
  te = null,
  fe = 0,
  De = 0,
  _n = Qt(0),
  ie = 0,
  qr = null,
  mn = 0,
  Io = 0,
  _a = 0,
  Lr = null,
  Ce = null,
  Oa = 0,
  Jn = 1 / 0,
  ut = null,
  yo = !1,
  Al = null,
  Ft = null,
  Li = !1,
  At = null,
  vo = 0,
  Vr = 0,
  Rl = null,
  Hi = -1,
  $i = 0;
function Se() {
  return I & 6 ? b() : Hi !== -1 ? Hi : (Hi = b());
}
function It(e) {
  return e.mode & 1
    ? I & 2 && fe !== 0
      ? fe & -fe
      : hy.transition !== null
      ? ($i === 0 && ($i = xd()), $i)
      : ((e = B),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ed(e.type))),
        e)
    : 1;
}
function Je(e, t, n, r) {
  if (50 < Vr) throw ((Vr = 0), (Rl = null), Error(k(185)));
  ri(e, n, r),
    (!(I & 2) || e !== ae) &&
      (e === ae && (!(I & 2) && (Io |= n), ie === 4 && Mt(e, fe)),
      Ve(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((Jn = b() + 500), No && Yt()));
}
function Ve(e, t) {
  var n = e.callbackNode;
  hg(e, t);
  var r = eo(e, e === ae ? fe : 0);
  if (r === 0)
    n !== null && Tu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Tu(n), t === 1))
      e.tag === 0 ? py(yc.bind(null, e)) : Gd(yc.bind(null, e)),
        uy(function () {
          !(I & 6) && Yt();
        }),
        (n = null);
    else {
      switch (wd(r)) {
        case 1:
          n = aa;
          break;
        case 4:
          n = yd;
          break;
        case 16:
          n = bi;
          break;
        case 536870912:
          n = vd;
          break;
        default:
          n = bi;
      }
      n = $p(n, Fp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Fp(e, t) {
  if (((Hi = -1), ($i = 0), I & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (Gn() && e.callbackNode !== n) return null;
  var r = eo(e, e === ae ? fe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = xo(e, r);
  else {
    t = r;
    var i = I;
    I |= 2;
    var o = zp();
    (ae !== e || fe !== t) && ((ut = null), (Jn = b() + 500), cn(e, t));
    do
      try {
        Ny();
        break;
      } catch (l) {
        Ip(e, l);
      }
    while (1);
    Sa(),
      (go.current = o),
      (I = i),
      te !== null ? (t = 0) : ((ae = null), (fe = 0), (t = ie));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = ol(e)), i !== 0 && ((r = i), (t = jl(e, i)))), t === 1)
    )
      throw ((n = qr), cn(e, 0), Mt(e, r), Ve(e, b()), n);
    if (t === 6) Mt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Ry(i) &&
          ((t = xo(e, r)),
          t === 2 && ((o = ol(e)), o !== 0 && ((r = o), (t = jl(e, o)))),
          t === 1))
      )
        throw ((n = qr), cn(e, 0), Mt(e, r), Ve(e, b()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          nn(e, Ce, ut);
          break;
        case 3:
          if (
            (Mt(e, r), (r & 130023424) === r && ((t = Oa + 500 - b()), 10 < t))
          ) {
            if (eo(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Se(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = pl(nn.bind(null, e, Ce, ut), t);
            break;
          }
          nn(e, Ce, ut);
          break;
        case 4:
          if ((Mt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - qe(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = b() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Ay(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = pl(nn.bind(null, e, Ce, ut), r);
            break;
          }
          nn(e, Ce, ut);
          break;
        case 5:
          nn(e, Ce, ut);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return Ve(e, b()), e.callbackNode === n ? Fp.bind(null, e) : null;
}
function jl(e, t) {
  var n = Lr;
  return (
    e.current.memoizedState.isDehydrated && (cn(e, t).flags |= 256),
    (e = xo(e, t)),
    e !== 2 && ((t = Ce), (Ce = n), t !== null && Nl(t)),
    e
  );
}
function Nl(e) {
  Ce === null ? (Ce = e) : Ce.push.apply(Ce, e);
}
function Ry(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!be(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Mt(e, t) {
  for (
    t &= ~_a,
      t &= ~Io,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - qe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function yc(e) {
  if (I & 6) throw Error(k(327));
  Gn();
  var t = eo(e, 0);
  if (!(t & 1)) return Ve(e, b()), null;
  var n = xo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ol(e);
    r !== 0 && ((t = r), (n = jl(e, r)));
  }
  if (n === 1) throw ((n = qr), cn(e, 0), Mt(e, t), Ve(e, b()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    nn(e, Ce, ut),
    Ve(e, b()),
    null
  );
}
function Fa(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((Jn = b() + 500), No && Yt());
  }
}
function gn(e) {
  At !== null && At.tag === 0 && !(I & 6) && Gn();
  var t = I;
  I |= 1;
  var n = He.transition,
    r = B;
  try {
    if (((He.transition = null), (B = 1), e)) return e();
  } finally {
    (B = r), (He.transition = n), (I = t), !(I & 6) && Yt();
  }
}
function Ia() {
  (De = _n.current), H(_n);
}
function cn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), ay(n)), te !== null))
    for (n = te.return; n !== null; ) {
      var r = n;
      switch ((va(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && oo();
          break;
        case 3:
          Zn(), H(Ee), H(ge), La();
          break;
        case 5:
          Ea(r);
          break;
        case 4:
          Zn();
          break;
        case 13:
          H(K);
          break;
        case 19:
          H(K);
          break;
        case 10:
          ka(r.type._context);
          break;
        case 22:
        case 23:
          Ia();
      }
      n = n.return;
    }
  if (
    ((ae = e),
    (te = e = zt(e.current, null)),
    (fe = De = t),
    (ie = 0),
    (qr = null),
    (_a = Io = mn = 0),
    (Ce = Lr = null),
    ln !== null)
  ) {
    for (t = 0; t < ln.length; t++)
      if (((n = ln[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    ln = null;
  }
  return e;
}
function Ip(e, t) {
  do {
    var n = te;
    try {
      if ((Sa(), (Bi.current = mo), ho)) {
        for (var r = Y.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        ho = !1;
      }
      if (
        ((hn = 0),
        (le = re = Y = null),
        (Tr = !1),
        (Yr = 0),
        (Na.current = null),
        n === null || n.return === null)
      ) {
        (ie = 1), (qr = t), (te = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = fe),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = ic(s);
          if (g !== null) {
            (g.flags &= -257),
              oc(g, s, l, o, t),
              g.mode & 1 && rc(o, u, t),
              (t = g),
              (a = u);
            var y = t.updateQueue;
            if (y === null) {
              var v = new Set();
              v.add(a), (t.updateQueue = v);
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              rc(o, u, t), za();
              break e;
            }
            a = Error(k(426));
          }
        } else if (G && l.mode & 1) {
          var T = ic(s);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256),
              oc(T, s, l, o, t),
              xa(qn(a, l));
            break e;
          }
        }
        (o = a = qn(a, l)),
          ie !== 4 && (ie = 2),
          Lr === null ? (Lr = [o]) : Lr.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var m = Sp(o, a, t);
              Zu(o, m);
              break e;
            case 1:
              l = a;
              var p = o.type,
                h = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Ft === null || !Ft.has(h))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var x = kp(o, l, t);
                Zu(o, x);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Up(n);
    } catch (S) {
      (t = S), te === n && n !== null && (te = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function zp() {
  var e = go.current;
  return (go.current = mo), e === null ? mo : e;
}
function za() {
  (ie === 0 || ie === 3 || ie === 2) && (ie = 4),
    ae === null || (!(mn & 268435455) && !(Io & 268435455)) || Mt(ae, fe);
}
function xo(e, t) {
  var n = I;
  I |= 2;
  var r = zp();
  (ae !== e || fe !== t) && ((ut = null), cn(e, t));
  do
    try {
      jy();
      break;
    } catch (i) {
      Ip(e, i);
    }
  while (1);
  if ((Sa(), (I = n), (go.current = r), te !== null)) throw Error(k(261));
  return (ae = null), (fe = 0), ie;
}
function jy() {
  for (; te !== null; ) Bp(te);
}
function Ny() {
  for (; te !== null && !og(); ) Bp(te);
}
function Bp(e) {
  var t = Hp(e.alternate, e, De);
  (e.memoizedProps = e.pendingProps),
    t === null ? Up(e) : (te = t),
    (Na.current = null);
}
function Up(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Ly(n, t)), n !== null)) {
        (n.flags &= 32767), (te = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ie = 6), (te = null);
        return;
      }
    } else if (((n = Ey(n, t, De)), n !== null)) {
      te = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      te = t;
      return;
    }
    te = t = e;
  } while (t !== null);
  ie === 0 && (ie = 5);
}
function nn(e, t, n) {
  var r = B,
    i = He.transition;
  try {
    (He.transition = null), (B = 1), _y(e, t, n, r);
  } finally {
    (He.transition = i), (B = r);
  }
  return null;
}
function _y(e, t, n, r) {
  do Gn();
  while (At !== null);
  if (I & 6) throw Error(k(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (mg(e, o),
    e === ae && ((te = ae = null), (fe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Li ||
      ((Li = !0),
      $p(bi, function () {
        return Gn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = He.transition), (He.transition = null);
    var s = B;
    B = 1;
    var l = I;
    (I |= 4),
      (Na.current = null),
      My(e, n),
      _p(n, e),
      ty(fl),
      (to = !!cl),
      (fl = cl = null),
      (e.current = n),
      Dy(n),
      sg(),
      (I = l),
      (B = s),
      (He.transition = o);
  } else e.current = n;
  if (
    (Li && ((Li = !1), (At = e), (vo = i)),
    (o = e.pendingLanes),
    o === 0 && (Ft = null),
    ug(n.stateNode),
    Ve(e, b()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (yo) throw ((yo = !1), (e = Al), (Al = null), e);
  return (
    vo & 1 && e.tag !== 0 && Gn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Rl ? Vr++ : ((Vr = 0), (Rl = e))) : (Vr = 0),
    Yt(),
    null
  );
}
function Gn() {
  if (At !== null) {
    var e = wd(vo),
      t = He.transition,
      n = B;
    try {
      if (((He.transition = null), (B = 16 > e ? 16 : e), At === null))
        var r = !1;
      else {
        if (((e = At), (At = null), (vo = 0), I & 6)) throw Error(k(331));
        var i = I;
        for (I |= 4, V = e.current; V !== null; ) {
          var o = V,
            s = o.child;
          if (V.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (V = u; V !== null; ) {
                  var c = V;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Er(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (V = f);
                  else
                    for (; V !== null; ) {
                      c = V;
                      var d = c.sibling,
                        g = c.return;
                      if ((Rp(c), c === u)) {
                        V = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = g), (V = d);
                        break;
                      }
                      V = g;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var T = v.sibling;
                    (v.sibling = null), (v = T);
                  } while (v !== null);
                }
              }
              V = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (V = s);
          else
            e: for (; V !== null; ) {
              if (((o = V), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Er(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (V = m);
                break e;
              }
              V = o.return;
            }
        }
        var p = e.current;
        for (V = p; V !== null; ) {
          s = V;
          var h = s.child;
          if (s.subtreeFlags & 2064 && h !== null) (h.return = s), (V = h);
          else
            e: for (s = p; V !== null; ) {
              if (((l = V), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Fo(9, l);
                  }
                } catch (S) {
                  Z(l, l.return, S);
                }
              if (l === s) {
                V = null;
                break e;
              }
              var x = l.sibling;
              if (x !== null) {
                (x.return = l.return), (V = x);
                break e;
              }
              V = l.return;
            }
        }
        if (
          ((I = i), Yt(), ot && typeof ot.onPostCommitFiberRoot == "function")
        )
          try {
            ot.onPostCommitFiberRoot(Mo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (B = n), (He.transition = t);
    }
  }
  return !1;
}
function vc(e, t, n) {
  (t = qn(n, t)),
    (t = Sp(e, t, 1)),
    (e = Ot(e, t, 1)),
    (t = Se()),
    e !== null && (ri(e, 1, t), Ve(e, t));
}
function Z(e, t, n) {
  if (e.tag === 3) vc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        vc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ft === null || !Ft.has(r)))
        ) {
          (e = qn(n, e)),
            (e = kp(t, e, 1)),
            (t = Ot(t, e, 1)),
            (e = Se()),
            t !== null && (ri(t, 1, e), Ve(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Oy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ae === e &&
      (fe & n) === n &&
      (ie === 4 || (ie === 3 && (fe & 130023424) === fe && 500 > b() - Oa)
        ? cn(e, 0)
        : (_a |= n)),
    Ve(e, t);
}
function Wp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = yi), (yi <<= 1), !(yi & 130023424) && (yi = 4194304))
      : (t = 1));
  var n = Se();
  (e = vt(e, t)), e !== null && (ri(e, t, n), Ve(e, n));
}
function Fy(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Wp(e, n);
}
function Iy(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), Wp(e, n);
}
var Hp;
Hp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ee.current) Te = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Te = !1), Ty(e, t, n);
      Te = !!(e.flags & 131072);
    }
  else (Te = !1), G && t.flags & 1048576 && Kd(t, ao, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Wi(e, t), (e = t.pendingProps);
      var i = Qn(t, ge.current);
      $n(t, n), (i = Ma(null, t, r, e, i, n));
      var o = Da();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Le(r) ? ((o = !0), so(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Ca(t),
            (i.updater = _o),
            (t.stateNode = i),
            (i._reactInternals = t),
            wl(t, r, e, n),
            (t = Pl(null, t, r, !0, o, n)))
          : ((t.tag = 0), G && o && ya(t), we(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Wi(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = By(r)),
          (e = Qe(r, e)),
          i)
        ) {
          case 0:
            t = kl(null, t, r, e, n);
            break e;
          case 1:
            t = ac(null, t, r, e, n);
            break e;
          case 11:
            t = sc(null, t, r, e, n);
            break e;
          case 14:
            t = lc(null, t, r, Qe(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Qe(r, i)),
        kl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Qe(r, i)),
        ac(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Ep(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Zd(e, t),
          fo(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = qn(Error(k(423)), t)), (t = uc(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = qn(Error(k(424)), t)), (t = uc(e, t, r, n, i));
            break e;
          } else
            for (
              Ae = _t(t.stateNode.containerInfo.firstChild),
                Re = t,
                G = !0,
                Xe = null,
                n = ep(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Yn(), r === i)) {
            t = xt(e, t, n);
            break e;
          }
          we(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        tp(t),
        e === null && yl(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        dl(r, i) ? (s = null) : o !== null && dl(r, o) && (t.flags |= 32),
        Tp(e, t),
        we(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && yl(t), null;
    case 13:
      return Lp(e, t, n);
    case 4:
      return (
        Ta(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Xn(t, null, r, n)) : we(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Qe(r, i)),
        sc(e, t, r, i, n)
      );
    case 7:
      return we(e, t, t.pendingProps, n), t.child;
    case 8:
      return we(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return we(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          U(uo, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (be(o.value, s)) {
            if (o.children === i.children && !Ee.current) {
              t = xt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                s = o.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = ht(-1, n & -n)), (a.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      vl(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(k(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  vl(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        we(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        $n(t, n),
        (i = $e(i)),
        (r = r(i)),
        (t.flags |= 1),
        we(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Qe(r, t.pendingProps)),
        (i = Qe(r.type, i)),
        lc(e, t, r, i, n)
      );
    case 15:
      return Pp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Qe(r, i)),
        Wi(e, t),
        (t.tag = 1),
        Le(r) ? ((e = !0), so(t)) : (e = !1),
        $n(t, n),
        Jd(t, r, i),
        wl(t, r, i, n),
        Pl(null, t, r, !0, e, n)
      );
    case 19:
      return Vp(e, t, n);
    case 22:
      return Cp(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function $p(e, t) {
  return gd(e, t);
}
function zy(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function We(e, t, n, r) {
  return new zy(e, t, n, r);
}
function Ba(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function By(e) {
  if (typeof e == "function") return Ba(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === oa)) return 11;
    if (e === sa) return 14;
  }
  return 2;
}
function zt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = We(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Gi(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) Ba(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Tn:
        return fn(n.children, i, o, t);
      case ia:
        (s = 8), (i |= 8);
        break;
      case $s:
        return (
          (e = We(12, n, t, i | 2)), (e.elementType = $s), (e.lanes = o), e
        );
      case Gs:
        return (e = We(13, n, t, i)), (e.elementType = Gs), (e.lanes = o), e;
      case Ks:
        return (e = We(19, n, t, i)), (e.elementType = Ks), (e.lanes = o), e;
      case bf:
        return zo(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case qf:
              s = 10;
              break e;
            case Jf:
              s = 9;
              break e;
            case oa:
              s = 11;
              break e;
            case sa:
              s = 14;
              break e;
            case Tt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = We(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function fn(e, t, n, r) {
  return (e = We(7, e, r, t)), (e.lanes = n), e;
}
function zo(e, t, n, r) {
  return (
    (e = We(22, e, r, t)),
    (e.elementType = bf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ls(e, t, n) {
  return (e = We(6, e, null, t)), (e.lanes = n), e;
}
function Vs(e, t, n) {
  return (
    (t = We(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Uy(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = as(0)),
    (this.expirationTimes = as(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = as(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Ua(e, t, n, r, i, o, s, l, a) {
  return (
    (e = new Uy(e, t, n, l, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = We(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ca(o),
    e
  );
}
function Wy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Cn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Gp(e) {
  if (!e) return Ht;
  e = e._reactInternals;
  e: {
    if (vn(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Le(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Le(n)) return $d(e, n, t);
  }
  return t;
}
function Kp(e, t, n, r, i, o, s, l, a) {
  return (
    (e = Ua(n, r, !0, e, i, o, s, l, a)),
    (e.context = Gp(null)),
    (n = e.current),
    (r = Se()),
    (i = It(n)),
    (o = ht(r, i)),
    (o.callback = t ?? null),
    Ot(n, o, i),
    (e.current.lanes = i),
    ri(e, i, r),
    Ve(e, r),
    e
  );
}
function Bo(e, t, n, r) {
  var i = t.current,
    o = Se(),
    s = It(i);
  return (
    (n = Gp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ht(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ot(i, t, s)),
    e !== null && (Je(e, i, s, o), zi(e, i, s)),
    s
  );
}
function wo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function xc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Wa(e, t) {
  xc(e, t), (e = e.alternate) && xc(e, t);
}
function Hy() {
  return null;
}
var Qp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ha(e) {
  this._internalRoot = e;
}
Uo.prototype.render = Ha.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Bo(e, t, null, null);
};
Uo.prototype.unmount = Ha.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    gn(function () {
      Bo(null, e, null, null);
    }),
      (t[yt] = null);
  }
};
function Uo(e) {
  this._internalRoot = e;
}
Uo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Pd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Vt.length && t !== 0 && t < Vt[n].priority; n++);
    Vt.splice(n, 0, e), n === 0 && Td(e);
  }
};
function $a(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Wo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function wc() {}
function $y(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = wo(s);
        o.call(u);
      };
    }
    var s = Kp(t, r, e, 0, null, !1, !1, "", wc);
    return (
      (e._reactRootContainer = s),
      (e[yt] = s.current),
      Hr(e.nodeType === 8 ? e.parentNode : e),
      gn(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = wo(a);
      l.call(u);
    };
  }
  var a = Ua(e, 0, !1, null, null, !1, !1, "", wc);
  return (
    (e._reactRootContainer = a),
    (e[yt] = a.current),
    Hr(e.nodeType === 8 ? e.parentNode : e),
    gn(function () {
      Bo(t, a, n, r);
    }),
    a
  );
}
function Ho(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = wo(s);
        l.call(a);
      };
    }
    Bo(t, s, e, i);
  } else s = $y(n, t, e, i, r);
  return wo(s);
}
Sd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = yr(t.pendingLanes);
        n !== 0 &&
          (ua(t, n | 1), Ve(t, b()), !(I & 6) && ((Jn = b() + 500), Yt()));
      }
      break;
    case 13:
      gn(function () {
        var r = vt(e, 1);
        if (r !== null) {
          var i = Se();
          Je(r, e, 1, i);
        }
      }),
        Wa(e, 1);
  }
};
ca = function (e) {
  if (e.tag === 13) {
    var t = vt(e, 134217728);
    if (t !== null) {
      var n = Se();
      Je(t, e, 134217728, n);
    }
    Wa(e, 134217728);
  }
};
kd = function (e) {
  if (e.tag === 13) {
    var t = It(e),
      n = vt(e, t);
    if (n !== null) {
      var r = Se();
      Je(n, e, t, r);
    }
    Wa(e, t);
  }
};
Pd = function () {
  return B;
};
Cd = function (e, t) {
  var n = B;
  try {
    return (B = e), t();
  } finally {
    B = n;
  }
};
nl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Xs(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = jo(r);
            if (!i) throw Error(k(90));
            td(r), Xs(r, i);
          }
        }
      }
      break;
    case "textarea":
      rd(e, n);
      break;
    case "select":
      (t = n.value), t != null && Bn(e, !!n.multiple, t, !1);
  }
};
cd = Fa;
fd = gn;
var Gy = { usingClientEntryPoint: !1, Events: [oi, Mn, jo, ad, ud, Fa] },
  fr = {
    findFiberByHostInstance: sn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Ky = {
    bundleType: fr.bundleType,
    version: fr.version,
    rendererPackageName: fr.rendererPackageName,
    rendererConfig: fr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: wt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = hd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: fr.findFiberByHostInstance || Hy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Vi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Vi.isDisabled && Vi.supportsFiber)
    try {
      (Mo = Vi.inject(Ky)), (ot = Vi);
    } catch {}
}
_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gy;
_e.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!$a(t)) throw Error(k(200));
  return Wy(e, t, null, n);
};
_e.createRoot = function (e, t) {
  if (!$a(e)) throw Error(k(299));
  var n = !1,
    r = "",
    i = Qp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Ua(e, 1, !1, null, null, n, !1, r, i)),
    (e[yt] = t.current),
    Hr(e.nodeType === 8 ? e.parentNode : e),
    new Ha(t)
  );
};
_e.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return (e = hd(t)), (e = e === null ? null : e.stateNode), e;
};
_e.flushSync = function (e) {
  return gn(e);
};
_e.hydrate = function (e, t, n) {
  if (!Wo(t)) throw Error(k(200));
  return Ho(null, e, t, !0, n);
};
_e.hydrateRoot = function (e, t, n) {
  if (!$a(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = Qp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Kp(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[yt] = t.current),
    Hr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Uo(t);
};
_e.render = function (e, t, n) {
  if (!Wo(t)) throw Error(k(200));
  return Ho(null, e, t, !1, n);
};
_e.unmountComponentAtNode = function (e) {
  if (!Wo(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (gn(function () {
        Ho(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[yt] = null);
        });
      }),
      !0)
    : !1;
};
_e.unstable_batchedUpdates = Fa;
_e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Wo(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Ho(e, t, n, !1, r);
};
_e.version = "18.2.0-next-9e3b772b8-20220608";
function Yp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yp);
    } catch (e) {
      console.error(e);
    }
}
Yp(), (Kf.exports = _e);
var Qy = Kf.exports,
  Sc = Qy;
(Ws.createRoot = Sc.createRoot), (Ws.hydrateRoot = Sc.hydrateRoot);
const $o = M.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Go = M.createContext({}),
  Ga = M.createContext(null),
  Ko = typeof document < "u",
  Qo = Ko ? M.useLayoutEffect : M.useEffect,
  Xp = M.createContext({ strict: !1 }),
  Ka = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
  Yy = "framerAppearId",
  Zp = "data-" + Ka(Yy);
function Xy(e, t, n, r) {
  const { visualElement: i } = M.useContext(Go),
    o = M.useContext(Xp),
    s = M.useContext(Ga),
    l = M.useContext($o).reducedMotion,
    a = M.useRef();
  (r = r || o.renderer),
    !a.current &&
      r &&
      (a.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: l,
      }));
  const u = a.current;
  M.useInsertionEffect(() => {
    u && u.update(n, s);
  });
  const c = M.useRef(!!(n[Zp] && !window.HandoffComplete));
  return (
    Qo(() => {
      u &&
        (u.render(),
        c.current && u.animationState && u.animationState.animateChanges());
    }),
    M.useEffect(() => {
      u &&
        (u.updateFeatures(),
        !c.current && u.animationState && u.animationState.animateChanges(),
        c.current && ((c.current = !1), (window.HandoffComplete = !0)));
    }),
    u
  );
}
function On(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function Zy(e, t, n) {
  return M.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : On(n) && (n.current = r));
    },
    [t]
  );
}
function Jr(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Yo(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Qa = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Ya = ["initial", ...Qa];
function Xo(e) {
  return Yo(e.animate) || Ya.some((t) => Jr(e[t]));
}
function qp(e) {
  return !!(Xo(e) || e.variants);
}
function qy(e, t) {
  if (Xo(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Jr(n) ? n : void 0,
      animate: Jr(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Jy(e) {
  const { initial: t, animate: n } = qy(e, M.useContext(Go));
  return M.useMemo(() => ({ initial: t, animate: n }), [kc(t), kc(n)]);
}
function kc(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Pc = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  br = {};
for (const e in Pc) br[e] = { isEnabled: (t) => Pc[e].some((n) => !!t[n]) };
function by(e) {
  for (const t in e) br[t] = { ...br[t], ...e[t] };
}
const Jp = M.createContext({}),
  bp = M.createContext({}),
  ev = Symbol.for("motionComponentSymbol");
function tv({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && by(e);
  function o(l, a) {
    let u;
    const c = { ...M.useContext($o), ...l, layoutId: nv(l) },
      { isStatic: f } = c,
      d = Jy(l),
      g = r(l, f);
    if (!f && Ko) {
      d.visualElement = Xy(i, g, c, t);
      const y = M.useContext(bp),
        v = M.useContext(Xp).strict;
      d.visualElement && (u = d.visualElement.loadFeatures(c, v, e, y));
    }
    return M.createElement(
      Go.Provider,
      { value: d },
      u && d.visualElement
        ? M.createElement(u, { visualElement: d.visualElement, ...c })
        : null,
      n(i, l, Zy(g, d.visualElement, a), g, f, d.visualElement)
    );
  }
  const s = M.forwardRef(o);
  return (s[ev] = i), s;
}
function nv({ layoutId: e }) {
  const t = M.useContext(Jp).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function rv(e) {
  function t(r, i = {}) {
    return tv(e(r, i));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
  });
}
const iv = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Xa(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(iv.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const So = {};
function ov(e) {
  Object.assign(So, e);
}
const li = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  xn = new Set(li);
function eh(e, { layout: t, layoutId: n }) {
  return (
    xn.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!So[e] || e === "opacity"))
  );
}
const ye = (e) => !!(e && e.getVelocity),
  sv = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  lv = li.length;
function av(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  i
) {
  let o = "";
  for (let s = 0; s < lv; s++) {
    const l = li[s];
    if (e[l] !== void 0) {
      const a = sv[l] || l;
      o += `${a}(${e[l]}) `;
    }
  }
  return (
    t && !e.z && (o += "translateZ(0)"),
    (o = o.trim()),
    i ? (o = i(e, r ? "" : o)) : n && r && (o = "none"),
    o
  );
}
const th = (e) => (t) => typeof t == "string" && t.startsWith(e),
  nh = th("--"),
  _l = th("var(--"),
  uv =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  cv = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  $t = (e, t, n) => Math.min(Math.max(n, e), t),
  wn = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Mr = { ...wn, transform: (e) => $t(0, 1, e) },
  Mi = { ...wn, default: 1 },
  Dr = (e) => Math.round(e * 1e5) / 1e5,
  Zo = /(-)?([\d]*\.?[\d])+/g,
  rh =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  fv =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function ai(e) {
  return typeof e == "string";
}
const ui = (e) => ({
    test: (t) => ai(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Pt = ui("deg"),
  lt = ui("%"),
  D = ui("px"),
  dv = ui("vh"),
  pv = ui("vw"),
  Cc = {
    ...lt,
    parse: (e) => lt.parse(e) / 100,
    transform: (e) => lt.transform(e * 100),
  },
  Tc = { ...wn, transform: Math.round },
  ih = {
    borderWidth: D,
    borderTopWidth: D,
    borderRightWidth: D,
    borderBottomWidth: D,
    borderLeftWidth: D,
    borderRadius: D,
    radius: D,
    borderTopLeftRadius: D,
    borderTopRightRadius: D,
    borderBottomRightRadius: D,
    borderBottomLeftRadius: D,
    width: D,
    maxWidth: D,
    height: D,
    maxHeight: D,
    size: D,
    top: D,
    right: D,
    bottom: D,
    left: D,
    padding: D,
    paddingTop: D,
    paddingRight: D,
    paddingBottom: D,
    paddingLeft: D,
    margin: D,
    marginTop: D,
    marginRight: D,
    marginBottom: D,
    marginLeft: D,
    rotate: Pt,
    rotateX: Pt,
    rotateY: Pt,
    rotateZ: Pt,
    scale: Mi,
    scaleX: Mi,
    scaleY: Mi,
    scaleZ: Mi,
    skew: Pt,
    skewX: Pt,
    skewY: Pt,
    distance: D,
    translateX: D,
    translateY: D,
    translateZ: D,
    x: D,
    y: D,
    z: D,
    perspective: D,
    transformPerspective: D,
    opacity: Mr,
    originX: Cc,
    originY: Cc,
    originZ: D,
    zIndex: Tc,
    fillOpacity: Mr,
    strokeOpacity: Mr,
    numOctaves: Tc,
  };
function Za(e, t, n, r) {
  const { style: i, vars: o, transform: s, transformOrigin: l } = e;
  let a = !1,
    u = !1,
    c = !0;
  for (const f in t) {
    const d = t[f];
    if (nh(f)) {
      o[f] = d;
      continue;
    }
    const g = ih[f],
      y = cv(d, g);
    if (xn.has(f)) {
      if (((a = !0), (s[f] = y), !c)) continue;
      d !== (g.default || 0) && (c = !1);
    } else f.startsWith("origin") ? ((u = !0), (l[f] = y)) : (i[f] = y);
  }
  if (
    (t.transform ||
      (a || r
        ? (i.transform = av(e.transform, n, c, r))
        : i.transform && (i.transform = "none")),
    u)
  ) {
    const { originX: f = "50%", originY: d = "50%", originZ: g = 0 } = l;
    i.transformOrigin = `${f} ${d} ${g}`;
  }
}
const qa = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function oh(e, t, n) {
  for (const r in t) !ye(t[r]) && !eh(r, n) && (e[r] = t[r]);
}
function hv({ transformTemplate: e }, t, n) {
  return M.useMemo(() => {
    const r = qa();
    return (
      Za(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function mv(e, t, n) {
  const r = e.style || {},
    i = {};
  return (
    oh(i, r, e),
    Object.assign(i, hv(e, t, n)),
    e.transformValues ? e.transformValues(i) : i
  );
}
function gv(e, t, n) {
  const r = {},
    i = mv(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = i),
    r
  );
}
const yv = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function ko(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    yv.has(e)
  );
}
let sh = (e) => !ko(e);
function vv(e) {
  e && (sh = (t) => (t.startsWith("on") ? !ko(t) : e(t)));
}
try {
  vv(require("@emotion/is-prop-valid").default);
} catch {}
function xv(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((sh(i) ||
        (n === !0 && ko(i)) ||
        (!t && !ko(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function Ec(e, t, n) {
  return typeof e == "string" ? e : D.transform(t + n * e);
}
function wv(e, t, n) {
  const r = Ec(t, e.x, e.width),
    i = Ec(n, e.y, e.height);
  return `${r} ${i}`;
}
const Sv = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  kv = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Pv(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? Sv : kv;
  e[o.offset] = D.transform(-r);
  const s = D.transform(t),
    l = D.transform(n);
  e[o.array] = `${s} ${l}`;
}
function Ja(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: l = 1,
    pathOffset: a = 0,
    ...u
  },
  c,
  f,
  d
) {
  if ((Za(e, u, c, d), f)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: g, style: y, dimensions: v } = e;
  g.transform && (v && (y.transform = g.transform), delete g.transform),
    v &&
      (i !== void 0 || o !== void 0 || y.transform) &&
      (y.transformOrigin = wv(
        v,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5
      )),
    t !== void 0 && (g.x = t),
    n !== void 0 && (g.y = n),
    r !== void 0 && (g.scale = r),
    s !== void 0 && Pv(g, s, l, a, !1);
}
const lh = () => ({ ...qa(), attrs: {} }),
  ba = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Cv(e, t, n, r) {
  const i = M.useMemo(() => {
    const o = lh();
    return (
      Ja(o, t, { enableHardwareAcceleration: !1 }, ba(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    oh(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function Tv(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const a = (Xa(n) ? Cv : gv)(r, o, s, n),
      c = { ...xv(r, typeof n == "string", e), ...a, ref: i },
      { children: f } = r,
      d = M.useMemo(() => (ye(f) ? f.get() : f), [f]);
    return M.createElement(n, { ...c, children: d });
  };
}
function ah(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const uh = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function ch(e, t, n, r) {
  ah(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(uh.has(i) ? i : Ka(i), t.attrs[i]);
}
function eu(e, t) {
  const { style: n } = e,
    r = {};
  for (const i in n)
    (ye(n[i]) || (t.style && ye(t.style[i])) || eh(i, e)) && (r[i] = n[i]);
  return r;
}
function fh(e, t) {
  const n = eu(e, t);
  for (const r in e)
    if (ye(e[r]) || ye(t[r])) {
      const i =
        li.indexOf(r) !== -1
          ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
          : r;
      n[i] = e[r];
    }
  return n;
}
function tu(e, t, n, r = {}, i = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
  );
}
function qo(e) {
  const t = M.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Po = (e) => Array.isArray(e),
  Ev = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  Lv = (e) => (Po(e) ? e[e.length - 1] || 0 : e);
function Ki(e) {
  const t = ye(e) ? e.get() : e;
  return Ev(t) ? t.toValue() : t;
}
function Vv(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  o
) {
  const s = { latestValues: Mv(r, i, o, e), renderState: t() };
  return n && (s.mount = (l) => n(r, l, s)), s;
}
const dh = (e) => (t, n) => {
  const r = M.useContext(Go),
    i = M.useContext(Ga),
    o = () => Vv(e, t, r, i);
  return n ? o() : qo(o);
};
function Mv(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const d in o) i[d] = Ki(o[d]);
  let { initial: s, animate: l } = e;
  const a = Xo(e),
    u = qp(e);
  t &&
    u &&
    !a &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), l === void 0 && (l = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const f = c ? l : s;
  return (
    f &&
      typeof f != "boolean" &&
      !Yo(f) &&
      (Array.isArray(f) ? f : [f]).forEach((g) => {
        const y = tu(e, g);
        if (!y) return;
        const { transitionEnd: v, transition: T, ...m } = y;
        for (const p in m) {
          let h = m[p];
          if (Array.isArray(h)) {
            const x = c ? h.length - 1 : 0;
            h = h[x];
          }
          h !== null && (i[p] = h);
        }
        for (const p in v) i[p] = v[p];
      }),
    i
  );
}
const q = (e) => e;
class Lc {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
}
function Dv(e) {
  let t = new Lc(),
    n = new Lc(),
    r = 0,
    i = !1,
    o = !1;
  const s = new WeakSet(),
    l = {
      schedule: (a, u = !1, c = !1) => {
        const f = c && i,
          d = f ? t : n;
        return u && s.add(a), d.add(a) && f && i && (r = t.order.length), a;
      },
      cancel: (a) => {
        n.remove(a), s.delete(a);
      },
      process: (a) => {
        if (i) {
          o = !0;
          return;
        }
        if (((i = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let u = 0; u < r; u++) {
            const c = t.order[u];
            c(a), s.has(c) && (l.schedule(c), e());
          }
        (i = !1), o && ((o = !1), l.process(a));
      },
    };
  return l;
}
const Di = ["prepare", "read", "update", "preRender", "render", "postRender"],
  Av = 40;
function Rv(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = Di.reduce((f, d) => ((f[d] = Dv(() => (n = !0))), f), {}),
    s = (f) => o[f].process(i),
    l = () => {
      const f = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, Av), 1)),
        (i.timestamp = f),
        (i.isProcessing = !0),
        Di.forEach(s),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(l));
    },
    a = () => {
      (n = !0), (r = !0), i.isProcessing || e(l);
    };
  return {
    schedule: Di.reduce((f, d) => {
      const g = o[d];
      return (f[d] = (y, v = !1, T = !1) => (n || a(), g.schedule(y, v, T))), f;
    }, {}),
    cancel: (f) => Di.forEach((d) => o[d].cancel(f)),
    state: i,
    steps: o,
  };
}
const {
    schedule: z,
    cancel: et,
    state: ne,
    steps: Ms,
  } = Rv(typeof requestAnimationFrame < "u" ? requestAnimationFrame : q, !0),
  jv = {
    useVisualState: dh({
      scrapeMotionValuesFromProps: fh,
      createRenderState: lh,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        z.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          z.render(() => {
            Ja(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              ba(t.tagName),
              e.transformTemplate
            ),
              ch(t, n);
          });
      },
    }),
  },
  Nv = {
    useVisualState: dh({
      scrapeMotionValuesFromProps: eu,
      createRenderState: qa,
    }),
  };
function _v(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(Xa(e) ? jv : Nv),
    preloadedFeatures: n,
    useRender: Tv(t),
    createVisualElement: r,
    Component: e,
  };
}
function pt(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const ph = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function Jo(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const Ov = (e) => (t) => ph(t) && e(t, Jo(t));
function mt(e, t, n, r) {
  return pt(e, t, Ov(n), r);
}
const Fv = (e, t) => (n) => t(e(n)),
  Bt = (...e) => e.reduce(Fv);
function hh(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const Vc = hh("dragHorizontal"),
  Mc = hh("dragVertical");
function mh(e) {
  let t = !1;
  if (e === "y") t = Mc();
  else if (e === "x") t = Vc();
  else {
    const n = Vc(),
      r = Mc();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function gh() {
  const e = mh(!0);
  return e ? (e(), !1) : !0;
}
class Xt {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function Dc(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    i = (o, s) => {
      if (o.pointerType === "touch" || gh()) return;
      const l = e.getProps();
      e.animationState &&
        l.whileHover &&
        e.animationState.setActive("whileHover", t),
        l[r] && z.update(() => l[r](o, s));
    };
  return mt(e.current, n, i, { passive: !e.getProps()[r] });
}
class Iv extends Xt {
  mount() {
    this.unmount = Bt(Dc(this.node, !0), Dc(this.node, !1));
  }
  unmount() {}
}
class zv extends Xt {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Bt(
      pt(this.node.current, "focus", () => this.onFocus()),
      pt(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const yh = (e, t) => (t ? (e === t ? !0 : yh(e, t.parentElement)) : !1);
function Ds(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, Jo(n));
}
class Bv extends Xt {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = q),
      (this.removeEndListeners = q),
      (this.removeAccessibleListeners = q),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          o = mt(
            window,
            "pointerup",
            (l, a) => {
              if (!this.checkPressEnd()) return;
              const {
                onTap: u,
                onTapCancel: c,
                globalTapTarget: f,
              } = this.node.getProps();
              z.update(() => {
                !f && !yh(this.node.current, l.target)
                  ? c && c(l, a)
                  : u && u(l, a);
              });
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          s = mt(window, "pointercancel", (l, a) => this.cancelPress(l, a), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = Bt(o, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (o) => {
            if (o.key !== "Enter" || this.isPressing) return;
            const s = (l) => {
              l.key !== "Enter" ||
                !this.checkPressEnd() ||
                Ds("up", (a, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && z.update(() => c(a, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = pt(this.node.current, "keyup", s)),
              Ds("down", (l, a) => {
                this.startPress(l, a);
              });
          },
          n = pt(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Ds("cancel", (o, s) => this.cancelPress(o, s));
          },
          i = pt(this.node.current, "blur", r);
        this.removeAccessibleListeners = Bt(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && z.update(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !gh()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && z.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = mt(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      r = pt(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Bt(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Ol = new WeakMap(),
  As = new WeakMap(),
  Uv = (e) => {
    const t = Ol.get(e.target);
    t && t(e);
  },
  Wv = (e) => {
    e.forEach(Uv);
  };
function Hv({ root: e, ...t }) {
  const n = e || document;
  As.has(n) || As.set(n, {});
  const r = As.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(Wv, { root: e, ...t })), r[i];
}
function $v(e, t, n) {
  const r = Hv(t);
  return (
    Ol.set(e, n),
    r.observe(e),
    () => {
      Ol.delete(e), r.unobserve(e);
    }
  );
}
const Gv = { some: 0, all: 1 };
class Kv extends Xt {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : Gv[i],
      },
      l = (a) => {
        const { isIntersecting: u } = a;
        if (
          this.isInView === u ||
          ((this.isInView = u), o && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f;
        d && d(a);
      };
    return $v(this.node.current, s, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Qv(t, n)) && this.startObserver();
  }
  unmount() {}
}
function Qv({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Yv = {
  inView: { Feature: Kv },
  tap: { Feature: Bv },
  focus: { Feature: zv },
  hover: { Feature: Iv },
};
function vh(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Xv(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function Zv(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function bo(e, t, n) {
  const r = e.getProps();
  return tu(r, t, n !== void 0 ? n : r.custom, Xv(e), Zv(e));
}
let xh = q,
  es = q;
const Ut = (e) => e * 1e3,
  at = (e) => e / 1e3,
  qv = { current: !1 },
  wh = (e) => Array.isArray(e) && typeof e[0] == "number";
function Sh(e) {
  return !!(
    !e ||
    (typeof e == "string" && kh[e]) ||
    wh(e) ||
    (Array.isArray(e) && e.every(Sh))
  );
}
const xr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  kh = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: xr([0, 0.65, 0.55, 1]),
    circOut: xr([0.55, 0, 1, 0.45]),
    backIn: xr([0.31, 0.01, 0.66, -0.59]),
    backOut: xr([0.33, 1.53, 0.69, 0.99]),
  };
function Ph(e) {
  if (e) return wh(e) ? xr(e) : Array.isArray(e) ? e.map(Ph) : kh[e];
}
function Jv(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: l,
    times: a,
  } = {}
) {
  const u = { [t]: n };
  a && (u.offset = a);
  const c = Ph(l);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
function bv(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const Ch = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  e0 = 1e-7,
  t0 = 12;
function n0(e, t, n, r, i) {
  let o,
    s,
    l = 0;
  do (s = t + (n - t) / 2), (o = Ch(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > e0 && ++l < t0);
  return s;
}
function ci(e, t, n, r) {
  if (e === t && n === r) return q;
  const i = (o) => n0(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : Ch(i(o), t, r));
}
const r0 = ci(0.42, 0, 1, 1),
  i0 = ci(0, 0, 0.58, 1),
  Th = ci(0.42, 0, 0.58, 1),
  o0 = (e) => Array.isArray(e) && typeof e[0] != "number",
  Eh = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Lh = (e) => (t) => 1 - e(1 - t),
  nu = (e) => 1 - Math.sin(Math.acos(e)),
  Vh = Lh(nu),
  s0 = Eh(nu),
  Mh = ci(0.33, 1.53, 0.69, 0.99),
  ru = Lh(Mh),
  l0 = Eh(ru),
  a0 = (e) =>
    (e *= 2) < 1 ? 0.5 * ru(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  u0 = {
    linear: q,
    easeIn: r0,
    easeInOut: Th,
    easeOut: i0,
    circIn: nu,
    circInOut: s0,
    circOut: Vh,
    backIn: ru,
    backInOut: l0,
    backOut: Mh,
    anticipate: a0,
  },
  Ac = (e) => {
    if (Array.isArray(e)) {
      es(e.length === 4);
      const [t, n, r, i] = e;
      return ci(t, n, r, i);
    } else if (typeof e == "string") return u0[e];
    return e;
  },
  iu = (e, t) => (n) =>
    !!(
      (ai(n) && fv.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Dh = (e, t, n) => (r) => {
    if (!ai(r)) return r;
    const [i, o, s, l] = r.match(Zo);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: l !== void 0 ? parseFloat(l) : 1,
    };
  },
  c0 = (e) => $t(0, 255, e),
  Rs = { ...wn, transform: (e) => Math.round(c0(e)) },
  un = {
    test: iu("rgb", "red"),
    parse: Dh("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Rs.transform(e) +
      ", " +
      Rs.transform(t) +
      ", " +
      Rs.transform(n) +
      ", " +
      Dr(Mr.transform(r)) +
      ")",
  };
function f0(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Fl = { test: iu("#"), parse: f0, transform: un.transform },
  Fn = {
    test: iu("hsl", "hue"),
    parse: Dh("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      lt.transform(Dr(t)) +
      ", " +
      lt.transform(Dr(n)) +
      ", " +
      Dr(Mr.transform(r)) +
      ")",
  },
  xe = {
    test: (e) => un.test(e) || Fl.test(e) || Fn.test(e),
    parse: (e) =>
      un.test(e) ? un.parse(e) : Fn.test(e) ? Fn.parse(e) : Fl.parse(e),
    transform: (e) =>
      ai(e) ? e : e.hasOwnProperty("red") ? un.transform(e) : Fn.transform(e),
  },
  Q = (e, t, n) => -n * e + n * t + e;
function js(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function d0({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - l;
    (i = js(a, l, e + 1 / 3)), (o = js(a, l, e)), (s = js(a, l, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
const Ns = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  },
  p0 = [Fl, un, Fn],
  h0 = (e) => p0.find((t) => t.test(e));
function Rc(e) {
  const t = h0(e);
  let n = t.parse(e);
  return t === Fn && (n = d0(n)), n;
}
const Ah = (e, t) => {
  const n = Rc(e),
    r = Rc(t),
    i = { ...n };
  return (o) => (
    (i.red = Ns(n.red, r.red, o)),
    (i.green = Ns(n.green, r.green, o)),
    (i.blue = Ns(n.blue, r.blue, o)),
    (i.alpha = Q(n.alpha, r.alpha, o)),
    un.transform(i)
  );
};
function m0(e) {
  var t, n;
  return (
    isNaN(e) &&
    ai(e) &&
    (((t = e.match(Zo)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(rh)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Rh = { regex: uv, countKey: "Vars", token: "${v}", parse: q },
  jh = { regex: rh, countKey: "Colors", token: "${c}", parse: xe.parse },
  Nh = { regex: Zo, countKey: "Numbers", token: "${n}", parse: wn.parse };
function _s(e, { regex: t, countKey: n, token: r, parse: i }) {
  const o = e.tokenised.match(t);
  o &&
    ((e["num" + n] = o.length),
    (e.tokenised = e.tokenised.replace(t, r)),
    e.values.push(...o.map(i)));
}
function Co(e) {
  const t = e.toString(),
    n = {
      value: t,
      tokenised: t,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0,
    };
  return n.value.includes("var(--") && _s(n, Rh), _s(n, jh), _s(n, Nh), n;
}
function _h(e) {
  return Co(e).values;
}
function Oh(e) {
  const { values: t, numColors: n, numVars: r, tokenised: i } = Co(e),
    o = t.length;
  return (s) => {
    let l = i;
    for (let a = 0; a < o; a++)
      a < r
        ? (l = l.replace(Rh.token, s[a]))
        : a < r + n
        ? (l = l.replace(jh.token, xe.transform(s[a])))
        : (l = l.replace(Nh.token, Dr(s[a])));
    return l;
  };
}
const g0 = (e) => (typeof e == "number" ? 0 : e);
function y0(e) {
  const t = _h(e);
  return Oh(e)(t.map(g0));
}
const Gt = {
    test: m0,
    parse: _h,
    createTransformer: Oh,
    getAnimatableNone: y0,
  },
  Fh = (e, t) => (n) => `${n > 0 ? t : e}`;
function Ih(e, t) {
  return typeof e == "number"
    ? (n) => Q(e, t, n)
    : xe.test(e)
    ? Ah(e, t)
    : e.startsWith("var(")
    ? Fh(e, t)
    : Bh(e, t);
}
const zh = (e, t) => {
    const n = [...e],
      r = n.length,
      i = e.map((o, s) => Ih(o, t[s]));
    return (o) => {
      for (let s = 0; s < r; s++) n[s] = i[s](o);
      return n;
    };
  },
  v0 = (e, t) => {
    const n = { ...e, ...t },
      r = {};
    for (const i in n)
      e[i] !== void 0 && t[i] !== void 0 && (r[i] = Ih(e[i], t[i]));
    return (i) => {
      for (const o in r) n[o] = r[o](i);
      return n;
    };
  },
  Bh = (e, t) => {
    const n = Gt.createTransformer(t),
      r = Co(e),
      i = Co(t);
    return r.numVars === i.numVars &&
      r.numColors === i.numColors &&
      r.numNumbers >= i.numNumbers
      ? Bt(zh(r.values, i.values), n)
      : Fh(e, t);
  },
  bn = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  jc = (e, t) => (n) => Q(e, t, n);
function x0(e) {
  return typeof e == "number"
    ? jc
    : typeof e == "string"
    ? xe.test(e)
      ? Ah
      : Bh
    : Array.isArray(e)
    ? zh
    : typeof e == "object"
    ? v0
    : jc;
}
function w0(e, t, n) {
  const r = [],
    i = n || x0(e[0]),
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let l = i(e[s], e[s + 1]);
    if (t) {
      const a = Array.isArray(t) ? t[s] || q : t;
      l = Bt(a, l);
    }
    r.push(l);
  }
  return r;
}
function ts(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if ((es(o === t.length), o === 1)) return () => t[0];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = w0(t, r, i),
    l = s.length,
    a = (u) => {
      let c = 0;
      if (l > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const f = bn(e[c], e[c + 1], u);
      return s[c](f);
    };
  return n ? (u) => a($t(e[0], e[o - 1], u)) : a;
}
function S0(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = bn(0, t, r);
    e.push(Q(n, 1, i));
  }
}
function Uh(e) {
  const t = [0];
  return S0(t, e.length - 1), t;
}
function k0(e, t) {
  return e.map((n) => n * t);
}
function P0(e, t) {
  return e.map(() => t || Th).splice(0, e.length - 1);
}
function To({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = o0(r) ? r.map(Ac) : Ac(r),
    o = { done: !1, value: t[0] },
    s = k0(n && n.length === t.length ? n : Uh(t), e),
    l = ts(s, t, { ease: Array.isArray(i) ? i : P0(t, i) });
  return {
    calculatedDuration: e,
    next: (a) => ((o.value = l(a)), (o.done = a >= e), o),
  };
}
function ou(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const C0 = 5;
function Wh(e, t, n) {
  const r = Math.max(t - C0, 0);
  return ou(n - e(r), t - r);
}
const Os = 0.001,
  T0 = 0.01,
  Nc = 10,
  E0 = 0.05,
  L0 = 1;
function V0({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i, o;
  xh(e <= Ut(Nc));
  let s = 1 - t;
  (s = $t(E0, L0, s)),
    (e = $t(T0, Nc, at(e))),
    s < 1
      ? ((i = (u) => {
          const c = u * s,
            f = c * e,
            d = c - n,
            g = Il(u, s),
            y = Math.exp(-f);
          return Os - (d / g) * y;
        }),
        (o = (u) => {
          const f = u * s * e,
            d = f * n + n,
            g = Math.pow(s, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-f),
            v = Il(Math.pow(u, 2), s);
          return ((-i(u) + Os > 0 ? -1 : 1) * ((d - g) * y)) / v;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -Os + c * f;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        }));
  const l = 5 / e,
    a = D0(i, o, l);
  if (((e = Ut(e)), isNaN(a)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(a, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const M0 = 12;
function D0(e, t, n) {
  let r = n;
  for (let i = 1; i < M0; i++) r = r - e(r) / t(r);
  return r;
}
function Il(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const A0 = ["duration", "bounce"],
  R0 = ["stiffness", "damping", "mass"];
function _c(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function j0(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!_c(e, R0) && _c(e, A0)) {
    const n = V0(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function Hh({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    {
      stiffness: l,
      damping: a,
      mass: u,
      duration: c,
      velocity: f,
      isResolvedFromDuration: d,
    } = j0({ ...r, velocity: -at(r.velocity || 0) }),
    g = f || 0,
    y = a / (2 * Math.sqrt(l * u)),
    v = o - i,
    T = at(Math.sqrt(l / u)),
    m = Math.abs(v) < 5;
  n || (n = m ? 0.01 : 2), t || (t = m ? 0.005 : 0.5);
  let p;
  if (y < 1) {
    const h = Il(T, y);
    p = (x) => {
      const S = Math.exp(-y * T * x);
      return (
        o - S * (((g + y * T * v) / h) * Math.sin(h * x) + v * Math.cos(h * x))
      );
    };
  } else if (y === 1) p = (h) => o - Math.exp(-T * h) * (v + (g + T * v) * h);
  else {
    const h = T * Math.sqrt(y * y - 1);
    p = (x) => {
      const S = Math.exp(-y * T * x),
        E = Math.min(h * x, 300);
      return (
        o - (S * ((g + y * T * v) * Math.sinh(E) + h * v * Math.cosh(E))) / h
      );
    };
  }
  return {
    calculatedDuration: (d && c) || null,
    next: (h) => {
      const x = p(h);
      if (d) s.done = h >= c;
      else {
        let S = g;
        h !== 0 && (y < 1 ? (S = Wh(p, h, x)) : (S = 0));
        const E = Math.abs(S) <= n,
          C = Math.abs(o - x) <= t;
        s.done = E && C;
      }
      return (s.value = s.done ? o : x), s;
    },
  };
}
function Oc({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: l,
  max: a,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    g = (P) => (l !== void 0 && P < l) || (a !== void 0 && P > a),
    y = (P) =>
      l === void 0
        ? a
        : a === void 0 || Math.abs(l - P) < Math.abs(a - P)
        ? l
        : a;
  let v = n * t;
  const T = f + v,
    m = s === void 0 ? T : s(T);
  m !== T && (v = m - f);
  const p = (P) => -v * Math.exp(-P / r),
    h = (P) => m + p(P),
    x = (P) => {
      const N = p(P),
        R = h(P);
      (d.done = Math.abs(N) <= u), (d.value = d.done ? m : R);
    };
  let S, E;
  const C = (P) => {
    g(d.value) &&
      ((S = P),
      (E = Hh({
        keyframes: [d.value, y(d.value)],
        velocity: Wh(h, P, d.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    C(0),
    {
      calculatedDuration: null,
      next: (P) => {
        let N = !1;
        return (
          !E && S === void 0 && ((N = !0), x(P), C(P)),
          S !== void 0 && P > S ? E.next(P - S) : (!N && x(P), d)
        );
      },
    }
  );
}
const N0 = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => z.update(t, !0),
      stop: () => et(t),
      now: () => (ne.isProcessing ? ne.timestamp : performance.now()),
    };
  },
  Fc = 2e4;
function Ic(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Fc; ) (t += n), (r = e.next(t));
  return t >= Fc ? 1 / 0 : t;
}
const _0 = { decay: Oc, inertia: Oc, tween: To, keyframes: To, spring: Hh };
function ei({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = N0,
  keyframes: r,
  type: i = "keyframes",
  repeat: o = 0,
  repeatDelay: s = 0,
  repeatType: l = "loop",
  onPlay: a,
  onStop: u,
  onComplete: c,
  onUpdate: f,
  ...d
}) {
  let g = 1,
    y = !1,
    v,
    T;
  const m = () => {
    T = new Promise((j) => {
      v = j;
    });
  };
  m();
  let p;
  const h = _0[i] || To;
  let x;
  h !== To &&
    typeof r[0] != "number" &&
    ((x = ts([0, 100], r, { clamp: !1 })), (r = [0, 100]));
  const S = h({ ...d, keyframes: r });
  let E;
  l === "mirror" &&
    (E = h({
      ...d,
      keyframes: [...r].reverse(),
      velocity: -(d.velocity || 0),
    }));
  let C = "idle",
    P = null,
    N = null,
    R = null;
  S.calculatedDuration === null && o && (S.calculatedDuration = Ic(S));
  const { calculatedDuration: oe } = S;
  let ue = 1 / 0,
    ve = 1 / 0;
  oe !== null && ((ue = oe + s), (ve = ue * (o + 1) - s));
  let se = 0;
  const St = (j) => {
      if (N === null) return;
      g > 0 && (N = Math.min(N, j)),
        g < 0 && (N = Math.min(j - ve / g, N)),
        P !== null ? (se = P) : (se = Math.round(j - N) * g);
      const $ = se - t * (g >= 0 ? 1 : -1),
        Zt = g >= 0 ? $ < 0 : $ > ve;
      (se = Math.max($, 0)), C === "finished" && P === null && (se = ve);
      let tt = se,
        Sn = S;
      if (o) {
        const ns = Math.min(se, ve) / ue;
        let fi = Math.floor(ns),
          Jt = ns % 1;
        !Jt && ns >= 1 && (Jt = 1),
          Jt === 1 && fi--,
          (fi = Math.min(fi, o + 1)),
          !!(fi % 2) &&
            (l === "reverse"
              ? ((Jt = 1 - Jt), s && (Jt -= s / ue))
              : l === "mirror" && (Sn = E)),
          (tt = $t(0, 1, Jt) * ue);
      }
      const Me = Zt ? { done: !1, value: r[0] } : Sn.next(tt);
      x && (Me.value = x(Me.value));
      let { done: qt } = Me;
      !Zt && oe !== null && (qt = g >= 0 ? se >= ve : se <= 0);
      const Sm = P === null && (C === "finished" || (C === "running" && qt));
      return f && f(Me.value), Sm && L(), Me;
    },
    J = () => {
      p && p.stop(), (p = void 0);
    },
    Fe = () => {
      (C = "idle"), J(), v(), m(), (N = R = null);
    },
    L = () => {
      (C = "finished"), c && c(), J(), v();
    },
    A = () => {
      if (y) return;
      p || (p = n(St));
      const j = p.now();
      a && a(),
        P !== null ? (N = j - P) : (!N || C === "finished") && (N = j),
        C === "finished" && m(),
        (R = N),
        (P = null),
        (C = "running"),
        p.start();
    };
  e && A();
  const _ = {
    then(j, $) {
      return T.then(j, $);
    },
    get time() {
      return at(se);
    },
    set time(j) {
      (j = Ut(j)),
        (se = j),
        P !== null || !p || g === 0 ? (P = j) : (N = p.now() - j / g);
    },
    get duration() {
      const j = S.calculatedDuration === null ? Ic(S) : S.calculatedDuration;
      return at(j);
    },
    get speed() {
      return g;
    },
    set speed(j) {
      j === g || !p || ((g = j), (_.time = at(se)));
    },
    get state() {
      return C;
    },
    play: A,
    pause: () => {
      (C = "paused"), (P = se);
    },
    stop: () => {
      (y = !0), C !== "idle" && ((C = "idle"), u && u(), Fe());
    },
    cancel: () => {
      R !== null && St(R), Fe();
    },
    complete: () => {
      C = "finished";
    },
    sample: (j) => ((N = 0), St(j)),
  };
  return _;
}
function O0(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const F0 = O0(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  I0 = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  Ai = 10,
  z0 = 2e4,
  B0 = (e, t) => t.type === "spring" || e === "backgroundColor" || !Sh(t.ease);
function U0(e, t, { onUpdate: n, onComplete: r, ...i }) {
  if (
    !(
      F0() &&
      I0.has(t) &&
      !i.repeatDelay &&
      i.repeatType !== "mirror" &&
      i.damping !== 0 &&
      i.type !== "inertia"
    )
  )
    return !1;
  let s = !1,
    l,
    a,
    u = !1;
  const c = () => {
    a = new Promise((h) => {
      l = h;
    });
  };
  c();
  let { keyframes: f, duration: d = 300, ease: g, times: y } = i;
  if (B0(t, i)) {
    const h = ei({ ...i, repeat: 0, delay: 0 });
    let x = { done: !1, value: f[0] };
    const S = [];
    let E = 0;
    for (; !x.done && E < z0; ) (x = h.sample(E)), S.push(x.value), (E += Ai);
    (y = void 0), (f = S), (d = E - Ai), (g = "linear");
  }
  const v = Jv(e.owner.current, t, f, { ...i, duration: d, ease: g, times: y }),
    T = () => {
      (u = !1), v.cancel();
    },
    m = () => {
      (u = !0), z.update(T), l(), c();
    };
  return (
    (v.onfinish = () => {
      u || (e.set(bv(f, i)), r && r(), m());
    }),
    {
      then(h, x) {
        return a.then(h, x);
      },
      attachTimeline(h) {
        return (v.timeline = h), (v.onfinish = null), q;
      },
      get time() {
        return at(v.currentTime || 0);
      },
      set time(h) {
        v.currentTime = Ut(h);
      },
      get speed() {
        return v.playbackRate;
      },
      set speed(h) {
        v.playbackRate = h;
      },
      get duration() {
        return at(d);
      },
      play: () => {
        s || (v.play(), et(T));
      },
      pause: () => v.pause(),
      stop: () => {
        if (((s = !0), v.playState === "idle")) return;
        const { currentTime: h } = v;
        if (h) {
          const x = ei({ ...i, autoplay: !1 });
          e.setWithVelocity(x.sample(h - Ai).value, x.sample(h).value, Ai);
        }
        m();
      },
      complete: () => {
        u || v.finish();
      },
      cancel: m,
    }
  );
}
function W0({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const i = () => (
    n && n(e[e.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: q,
      pause: q,
      stop: q,
      then: (o) => (o(), Promise.resolve()),
      cancel: q,
      complete: q,
    }
  );
  return t
    ? ei({ keyframes: [0, 1], duration: 0, delay: t, onComplete: i })
    : i();
}
const H0 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  $0 = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  G0 = { type: "keyframes", duration: 0.8 },
  K0 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Q0 = (e, { keyframes: t }) =>
    t.length > 2
      ? G0
      : xn.has(e)
      ? e.startsWith("scale")
        ? $0(t[1])
        : H0
      : K0,
  zl = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" &&
            (Gt.test(t) || t === "0") &&
            !t.startsWith("url("))
        ),
  Y0 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function X0(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Zo) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = Y0.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const Z0 = /([a-z-]*)\(.*?\)/g,
  Bl = {
    ...Gt,
    getAnimatableNone: (e) => {
      const t = e.match(Z0);
      return t ? t.map(X0).join(" ") : e;
    },
  },
  q0 = {
    ...ih,
    color: xe,
    backgroundColor: xe,
    outlineColor: xe,
    fill: xe,
    stroke: xe,
    borderColor: xe,
    borderTopColor: xe,
    borderRightColor: xe,
    borderBottomColor: xe,
    borderLeftColor: xe,
    filter: Bl,
    WebkitFilter: Bl,
  },
  su = (e) => q0[e];
function $h(e, t) {
  let n = su(e);
  return (
    n !== Bl && (n = Gt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const Gh = (e) => /^0[^.\s]+$/.test(e);
function J0(e) {
  if (typeof e == "number") return e === 0;
  if (e !== null) return e === "none" || e === "0" || Gh(e);
}
function b0(e, t, n, r) {
  const i = zl(t, n);
  let o;
  Array.isArray(n) ? (o = [...n]) : (o = [null, n]);
  const s = r.from !== void 0 ? r.from : e.get();
  let l;
  const a = [];
  for (let u = 0; u < o.length; u++)
    o[u] === null && (o[u] = u === 0 ? s : o[u - 1]),
      J0(o[u]) && a.push(u),
      typeof o[u] == "string" && o[u] !== "none" && o[u] !== "0" && (l = o[u]);
  if (i && a.length && l)
    for (let u = 0; u < a.length; u++) {
      const c = a[u];
      o[c] = $h(t, l);
    }
  return o;
}
function e1({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: l,
  from: a,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function lu(e, t) {
  return e[t] || e.default || e;
}
const t1 = { skipAnimations: !1 },
  au =
    (e, t, n, r = {}) =>
    (i) => {
      const o = lu(r, e) || {},
        s = o.delay || r.delay || 0;
      let { elapsed: l = 0 } = r;
      l = l - Ut(s);
      const a = b0(t, e, n, o),
        u = a[0],
        c = a[a.length - 1],
        f = zl(e, u),
        d = zl(e, c);
      let g = {
        keyframes: a,
        velocity: t.getVelocity(),
        ease: "easeOut",
        ...o,
        delay: -l,
        onUpdate: (y) => {
          t.set(y), o.onUpdate && o.onUpdate(y);
        },
        onComplete: () => {
          i(), o.onComplete && o.onComplete();
        },
      };
      if (
        (e1(o) || (g = { ...g, ...Q0(e, g) }),
        g.duration && (g.duration = Ut(g.duration)),
        g.repeatDelay && (g.repeatDelay = Ut(g.repeatDelay)),
        !f || !d || qv.current || o.type === !1 || t1.skipAnimations)
      )
        return W0(g);
      if (
        !r.isHandoff &&
        t.owner &&
        t.owner.current instanceof HTMLElement &&
        !t.owner.getProps().onUpdate
      ) {
        const y = U0(t, e, g);
        if (y) return y;
      }
      return ei(g);
    };
function Eo(e) {
  return !!(ye(e) && e.add);
}
const Kh = (e) => /^\-?\d*\.?\d+$/.test(e);
function uu(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function cu(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class fu {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return uu(this.subscriptions, t), () => cu(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const n1 = (e) => !isNaN(parseFloat(e)),
  Ar = { current: void 0 };
class r1 {
  constructor(t, n = {}) {
    (this.version = "10.18.0"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        (this.prev = this.current), (this.current = r);
        const { delta: o, timestamp: s } = ne;
        this.lastUpdated !== s &&
          ((this.timeDelta = o),
          (this.lastUpdated = s),
          z.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => z.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = n1(this.current)),
      (this.owner = n.owner);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new fu());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            z.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), (this.prev = t), (this.timeDelta = r);
  }
  jump(t) {
    this.updateAndNotify(t),
      (this.prev = t),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return Ar.current && Ar.current.push(this), this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? ou(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Ze(e, t) {
  return new r1(e, t);
}
const Qh = (e) => (t) => t.test(e),
  i1 = { test: (e) => e === "auto", parse: (e) => e },
  Yh = [wn, D, lt, Pt, pv, dv, i1],
  dr = (e) => Yh.find(Qh(e)),
  o1 = [...Yh, xe, Gt],
  s1 = (e) => o1.find(Qh(e));
function l1(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ze(n));
}
function a1(e, t) {
  const n = bo(e, t);
  let {
    transitionEnd: r = {},
    transition: i = {},
    ...o
  } = n ? e.makeTargetAnimatable(n, !1) : {};
  o = { ...o, ...r };
  for (const s in o) {
    const l = Lv(o[s]);
    l1(e, s, l);
  }
}
function u1(e, t, n) {
  var r, i;
  const o = Object.keys(t).filter((l) => !e.hasValue(l)),
    s = o.length;
  if (s)
    for (let l = 0; l < s; l++) {
      const a = o[l],
        u = t[a];
      let c = null;
      Array.isArray(u) && (c = u[0]),
        c === null &&
          (c =
            (i = (r = n[a]) !== null && r !== void 0 ? r : e.readValue(a)) !==
              null && i !== void 0
              ? i
              : t[a]),
        c != null &&
          (typeof c == "string" && (Kh(c) || Gh(c))
            ? (c = parseFloat(c))
            : !s1(c) && Gt.test(u) && (c = $h(a, u)),
          e.addValue(a, Ze(c, { owner: e })),
          n[a] === void 0 && (n[a] = c),
          c !== null && e.setBaseTarget(a, c));
    }
}
function c1(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function f1(e, t, n) {
  const r = {};
  for (const i in e) {
    const o = c1(i, t);
    if (o !== void 0) r[i] = o;
    else {
      const s = n.getValue(i);
      s && (r[i] = s.get());
    }
  }
  return r;
}
function d1({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function p1(e, t) {
  const n = e.get();
  if (Array.isArray(t)) {
    for (let r = 0; r < t.length; r++) if (t[r] !== n) return !0;
  } else return n !== t;
}
function Xh(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let {
    transition: o = e.getDefaultTransition(),
    transitionEnd: s,
    ...l
  } = e.makeTargetAnimatable(t);
  const a = e.getValue("willChange");
  r && (o = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const f in l) {
    const d = e.getValue(f),
      g = l[f];
    if (!d || g === void 0 || (c && d1(c, f))) continue;
    const y = { delay: n, elapsed: 0, ...lu(o || {}, f) };
    if (window.HandoffAppearAnimations) {
      const m = e.getProps()[Zp];
      if (m) {
        const p = window.HandoffAppearAnimations(m, f, d, z);
        p !== null && ((y.elapsed = p), (y.isHandoff = !0));
      }
    }
    let v = !y.isHandoff && !p1(d, g);
    if (
      (y.type === "spring" && (d.getVelocity() || y.velocity) && (v = !1),
      d.animation && (v = !1),
      v)
    )
      continue;
    d.start(au(f, d, g, e.shouldReduceMotion && xn.has(f) ? { type: !1 } : y));
    const T = d.animation;
    Eo(a) && (a.add(f), T.then(() => a.remove(f))), u.push(T);
  }
  return (
    s &&
      Promise.all(u).then(() => {
        s && a1(e, s);
      }),
    u
  );
}
function Ul(e, t, n = {}) {
  const r = bo(e, t, n.custom);
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = r ? () => Promise.all(Xh(e, r, n)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (a = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: c,
              staggerDirection: f,
            } = i;
            return h1(e, t, u + a, c, f, n);
          }
        : () => Promise.resolve(),
    { when: l } = i;
  if (l) {
    const [a, u] = l === "beforeChildren" ? [o, s] : [s, o];
    return a().then(() => u());
  } else return Promise.all([o(), s(n.delay)]);
}
function h1(e, t, n = 0, r = 0, i = 1, o) {
  const s = [],
    l = (e.variantChildren.size - 1) * r,
    a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(m1)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(
            Ul(u, t, { ...o, delay: n + a(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function m1(e, t) {
  return e.sortNodePosition(t);
}
function g1(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => Ul(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = Ul(e, t, n);
  else {
    const i = typeof t == "function" ? bo(e, t, n.custom) : t;
    r = Promise.all(Xh(e, i, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const y1 = [...Qa].reverse(),
  v1 = Qa.length;
function x1(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => g1(e, n, r)));
}
function w1(e) {
  let t = x1(e);
  const n = k1();
  let r = !0;
  const i = (a, u) => {
    const c = bo(e, u);
    if (c) {
      const { transition: f, transitionEnd: d, ...g } = c;
      a = { ...a, ...g, ...d };
    }
    return a;
  };
  function o(a) {
    t = a(e);
  }
  function s(a, u) {
    const c = e.getProps(),
      f = e.getVariantContext(!0) || {},
      d = [],
      g = new Set();
    let y = {},
      v = 1 / 0;
    for (let m = 0; m < v1; m++) {
      const p = y1[m],
        h = n[p],
        x = c[p] !== void 0 ? c[p] : f[p],
        S = Jr(x),
        E = p === u ? h.isActive : null;
      E === !1 && (v = m);
      let C = x === f[p] && x !== c[p] && S;
      if (
        (C && r && e.manuallyAnimateOnMount && (C = !1),
        (h.protectedKeys = { ...y }),
        (!h.isActive && E === null) ||
          (!x && !h.prevProp) ||
          Yo(x) ||
          typeof x == "boolean")
      )
        continue;
      let N =
          S1(h.prevProp, x) ||
          (p === u && h.isActive && !C && S) ||
          (m > v && S),
        R = !1;
      const oe = Array.isArray(x) ? x : [x];
      let ue = oe.reduce(i, {});
      E === !1 && (ue = {});
      const { prevResolvedValues: ve = {} } = h,
        se = { ...ve, ...ue },
        St = (J) => {
          (N = !0),
            g.has(J) && ((R = !0), g.delete(J)),
            (h.needsAnimating[J] = !0);
        };
      for (const J in se) {
        const Fe = ue[J],
          L = ve[J];
        if (y.hasOwnProperty(J)) continue;
        let A = !1;
        Po(Fe) && Po(L) ? (A = !vh(Fe, L)) : (A = Fe !== L),
          A
            ? Fe !== void 0
              ? St(J)
              : g.add(J)
            : Fe !== void 0 && g.has(J)
            ? St(J)
            : (h.protectedKeys[J] = !0);
      }
      (h.prevProp = x),
        (h.prevResolvedValues = ue),
        h.isActive && (y = { ...y, ...ue }),
        r && e.blockInitialAnimation && (N = !1),
        N &&
          (!C || R) &&
          d.push(
            ...oe.map((J) => ({ animation: J, options: { type: p, ...a } }))
          );
    }
    if (g.size) {
      const m = {};
      g.forEach((p) => {
        const h = e.getBaseTarget(p);
        h !== void 0 && (m[p] = h);
      }),
        d.push({ animation: m });
    }
    let T = !!d.length;
    return (
      r &&
        (c.initial === !1 || c.initial === c.animate) &&
        !e.manuallyAnimateOnMount &&
        (T = !1),
      (r = !1),
      T ? t(d) : Promise.resolve()
    );
  }
  function l(a, u, c) {
    var f;
    if (n[a].isActive === u) return Promise.resolve();
    (f = e.variantChildren) === null ||
      f === void 0 ||
      f.forEach((g) => {
        var y;
        return (y = g.animationState) === null || y === void 0
          ? void 0
          : y.setActive(a, u);
      }),
      (n[a].isActive = u);
    const d = s(c, a);
    for (const g in n) n[g].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: s,
    setActive: l,
    setAnimateFunction: o,
    getState: () => n,
  };
}
function S1(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !vh(t, e) : !1;
}
function bt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function k1() {
  return {
    animate: bt(!0),
    whileInView: bt(),
    whileHover: bt(),
    whileTap: bt(),
    whileDrag: bt(),
    whileFocus: bt(),
    exit: bt(),
  };
}
class P1 extends Xt {
  constructor(t) {
    super(t), t.animationState || (t.animationState = w1(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Yo(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let C1 = 0;
class T1 extends Xt {
  constructor() {
    super(...arguments), (this.id = C1++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: t,
        onExitComplete: n,
        custom: r,
      } = this.node.presenceContext,
      { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === i) return;
    const o = this.node.animationState.setActive("exit", !t, {
      custom: r ?? this.node.getProps().custom,
    });
    n && !t && o.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const E1 = { animation: { Feature: P1 }, exit: { Feature: T1 } },
  zc = (e, t) => Math.abs(e - t);
function L1(e, t) {
  const n = zc(e.x, t.x),
    r = zc(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Zh {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = Is(this.lastMoveEventInfo, this.history),
          d = this.startEvent !== null,
          g = L1(f.offset, { x: 0, y: 0 }) >= 3;
        if (!d && !g) return;
        const { point: y } = f,
          { timestamp: v } = ne;
        this.history.push({ ...y, timestamp: v });
        const { onStart: T, onMove: m } = this.handlers;
        d ||
          (T && T(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          m && m(this.lastMoveEvent, f);
      }),
      (this.handlePointerMove = (f, d) => {
        (this.lastMoveEvent = f),
          (this.lastMoveEventInfo = Fs(d, this.transformPagePoint)),
          z.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (f, d) => {
        this.end();
        const { onEnd: g, onSessionEnd: y, resumeAnimation: v } = this.handlers;
        if (
          (this.dragSnapToOrigin && v && v(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const T = Is(
          f.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Fs(d, this.transformPagePoint),
          this.history
        );
        this.startEvent && g && g(f, T), y && y(f, T);
      }),
      !ph(t))
    )
      return;
    (this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const s = Jo(t),
      l = Fs(s, this.transformPagePoint),
      { point: a } = l,
      { timestamp: u } = ne;
    this.history = [{ ...a, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, Is(l, this.history)),
      (this.removeListeners = Bt(
        mt(this.contextWindow, "pointermove", this.handlePointerMove),
        mt(this.contextWindow, "pointerup", this.handlePointerUp),
        mt(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), et(this.updatePoint);
  }
}
function Fs(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Bc(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Is({ point: e }, t) {
  return {
    point: e,
    delta: Bc(e, qh(t)),
    offset: Bc(e, V1(t)),
    velocity: M1(t, 0.1),
  };
}
function V1(e) {
  return e[0];
}
function qh(e) {
  return e[e.length - 1];
}
function M1(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = qh(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Ut(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = at(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function Ne(e) {
  return e.max - e.min;
}
function Wl(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function Uc(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = Q(t.min, t.max, e.origin)),
    (e.scale = Ne(n) / Ne(t)),
    (Wl(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = Q(n.min, n.max, e.origin) - e.originPoint),
    (Wl(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Rr(e, t, n, r) {
  Uc(e.x, t.x, n.x, r ? r.originX : void 0),
    Uc(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Wc(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Ne(t));
}
function D1(e, t, n) {
  Wc(e.x, t.x, n.x), Wc(e.y, t.y, n.y);
}
function Hc(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Ne(t));
}
function jr(e, t, n) {
  Hc(e.x, t.x, n.x), Hc(e.y, t.y, n.y);
}
function A1(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? Q(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? Q(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function $c(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function R1(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: $c(e.x, n, i), y: $c(e.y, t, r) };
}
function Gc(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function j1(e, t) {
  return { x: Gc(e.x, t.x), y: Gc(e.y, t.y) };
}
function N1(e, t) {
  let n = 0.5;
  const r = Ne(e),
    i = Ne(t);
  return (
    i > r
      ? (n = bn(t.min, t.max - r, e.min))
      : r > i && (n = bn(e.min, e.max - i, t.min)),
    $t(0, 1, n)
  );
}
function _1(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Hl = 0.35;
function O1(e = Hl) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Hl),
    { x: Kc(e, "left", "right"), y: Kc(e, "top", "bottom") }
  );
}
function Kc(e, t, n) {
  return { min: Qc(e, t), max: Qc(e, n) };
}
function Qc(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Yc = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  In = () => ({ x: Yc(), y: Yc() }),
  Xc = () => ({ min: 0, max: 0 }),
  ee = () => ({ x: Xc(), y: Xc() });
function ze(e) {
  return [e("x"), e("y")];
}
function Jh({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function F1({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function I1(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function zs(e) {
  return e === void 0 || e === 1;
}
function $l({ scale: e, scaleX: t, scaleY: n }) {
  return !zs(e) || !zs(t) || !zs(n);
}
function rn(e) {
  return $l(e) || bh(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function bh(e) {
  return Zc(e.x) || Zc(e.y);
}
function Zc(e) {
  return e && e !== "0%";
}
function Lo(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function qc(e, t, n, r, i) {
  return i !== void 0 && (e = Lo(e, i, r)), Lo(e, n, r) + t;
}
function Gl(e, t = 0, n = 1, r, i) {
  (e.min = qc(e.min, t, n, r, i)), (e.max = qc(e.max, t, n, r, i));
}
function em(e, { x: t, y: n }) {
  Gl(e.x, t.translate, t.scale, t.originPoint),
    Gl(e.y, n.translate, n.scale, n.originPoint);
}
function z1(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let l = 0; l < i; l++) {
    (o = n[l]), (s = o.projectionDelta);
    const a = o.instance;
    (a && a.style && a.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        zn(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), em(e, s)),
      r && rn(o.latestValues) && zn(e, o.latestValues));
  }
  (t.x = Jc(t.x)), (t.y = Jc(t.y));
}
function Jc(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function Lt(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function bc(e, t, [n, r, i]) {
  const o = t[i] !== void 0 ? t[i] : 0.5,
    s = Q(e.min, e.max, o);
  Gl(e, t[n], t[r], s, t.scale);
}
const B1 = ["x", "scaleX", "originX"],
  U1 = ["y", "scaleY", "originY"];
function zn(e, t) {
  bc(e.x, t, B1), bc(e.y, t, U1);
}
function tm(e, t) {
  return Jh(I1(e.getBoundingClientRect(), t));
}
function W1(e, t, n) {
  const r = tm(e, n),
    { scroll: i } = t;
  return i && (Lt(r.x, i.offset.x), Lt(r.y, i.offset.y)), r;
}
const nm = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  H1 = new WeakMap();
class $1 {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = ee()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (c) => {
        const { dragSnapToOrigin: f } = this.getProps();
        f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Jo(c, "page").point);
      },
      o = (c, f) => {
        const { drag: d, dragPropagation: g, onDragStart: y } = this.getProps();
        if (
          d &&
          !g &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = mh(d)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          ze((T) => {
            let m = this.getAxisMotionValue(T).get() || 0;
            if (lt.test(m)) {
              const { projection: p } = this.visualElement;
              if (p && p.layout) {
                const h = p.layout.layoutBox[T];
                h && (m = Ne(h) * (parseFloat(m) / 100));
              }
            }
            this.originPoint[T] = m;
          }),
          y && z.update(() => y(c, f), !1, !0);
        const { animationState: v } = this.visualElement;
        v && v.setActive("whileDrag", !0);
      },
      s = (c, f) => {
        const {
          dragPropagation: d,
          dragDirectionLock: g,
          onDirectionLock: y,
          onDrag: v,
        } = this.getProps();
        if (!d && !this.openGlobalLock) return;
        const { offset: T } = f;
        if (g && this.currentDirection === null) {
          (this.currentDirection = G1(T)),
            this.currentDirection !== null && y && y(this.currentDirection);
          return;
        }
        this.updateAxis("x", f.point, T),
          this.updateAxis("y", f.point, T),
          this.visualElement.render(),
          v && v(c, f);
      },
      l = (c, f) => this.stop(c, f),
      a = () =>
        ze((c) => {
          var f;
          return (
            this.getAnimationState(c) === "paused" &&
            ((f = this.getAxisMotionValue(c).animation) === null || f === void 0
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Zh(
      t,
      {
        onSessionStart: i,
        onStart: o,
        onMove: s,
        onSessionEnd: l,
        resumeAnimation: a,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: nm(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && z.update(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Ri(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = A1(s, this.constraints[t], this.elastic[t])),
      o.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      o = this.constraints;
    n && On(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
      ? (this.constraints = R1(i.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = O1(r)),
      o !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        ze((s) => {
          this.getAxisMotionValue(s) &&
            (this.constraints[s] = _1(i.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !On(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = W1(r, i.root, this.visualElement.getTransformPagePoint());
    let s = j1(i.layout.layoutBox, o);
    if (n) {
      const l = n(F1(s));
      (this.hasMutatedConstraints = !!l), l && (s = Jh(l));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: l,
      } = this.getProps(),
      a = this.constraints || {},
      u = ze((c) => {
        if (!Ri(c, n, this.currentDirection)) return;
        let f = (a && a[c]) || {};
        s && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          g = i ? 40 : 1e7,
          y = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: g,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...f,
          };
        return this.startAxisValueAnimation(c, y);
      });
    return Promise.all(u).then(l);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(au(t, r, 0, n));
  }
  stopAnimation() {
    ze((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    ze((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(),
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    ze((n) => {
      const { drag: r } = this.getProps();
      if (!Ri(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: l } = i.layout.layoutBox[n];
        o.set(t[n] - Q(s, l, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!On(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    ze((s) => {
      const l = this.getAxisMotionValue(s);
      if (l) {
        const a = l.get();
        i[s] = N1({ min: a, max: a }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      ze((s) => {
        if (!Ri(s, t, null)) return;
        const l = this.getAxisMotionValue(s),
          { min: a, max: u } = this.constraints[s];
        l.set(Q(a, u, i[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    H1.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = mt(t, "pointerdown", (a) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(a);
      }),
      r = () => {
        const { dragConstraints: a } = this.getProps();
        On(a) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
    const s = pt(window, "resize", () => this.scalePositionWithinConstraints()),
      l = i.addEventListener(
        "didUpdate",
        ({ delta: a, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (ze((c) => {
              const f = this.getAxisMotionValue(c);
              f &&
                ((this.originPoint[c] += a[c].translate),
                f.set(f.get() + a[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      s(), n(), o(), l && l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = Hl,
        dragMomentum: l = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: l,
    };
  }
}
function Ri(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function G1(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class K1 extends Xt {
  constructor(t) {
    super(t),
      (this.removeGroupControls = q),
      (this.removeListeners = q),
      (this.controls = new $1(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || q);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const ef = (e) => (t, n) => {
  e && z.update(() => e(t, n));
};
class Q1 extends Xt {
  constructor() {
    super(...arguments), (this.removePointerDownListener = q);
  }
  onPointerDown(t) {
    this.session = new Zh(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: nm(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: ef(t),
      onStart: ef(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && z.update(() => i(o, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = mt(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function Y1() {
  const e = M.useContext(Ga);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = M.useId();
  return M.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
const Qi = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function tf(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const pr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (D.test(e)) e = parseFloat(e);
        else return e;
      const n = tf(e, t.target.x),
        r = tf(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  X1 = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = Gt.parse(e);
      if (i.length > 5) return r;
      const o = Gt.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        l = n.x.scale * t.x,
        a = n.y.scale * t.y;
      (i[0 + s] /= l), (i[1 + s] /= a);
      const u = Q(l, a, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= u),
        typeof i[3 + s] == "number" && (i[3 + s] /= u),
        o(i)
      );
    },
  };
class Z1 extends ea.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    ov(q1),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Qi.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = o),
        i || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              z.postRender(() => {
                const l = s.getStack();
                (!l || !l.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      queueMicrotask(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function rm(e) {
  const [t, n] = Y1(),
    r = M.useContext(Jp);
  return ea.createElement(Z1, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: M.useContext(bp),
    isPresent: t,
    safeToRemove: n,
  });
}
const q1 = {
    borderRadius: {
      ...pr,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: pr,
    borderTopRightRadius: pr,
    borderBottomLeftRadius: pr,
    borderBottomRightRadius: pr,
    boxShadow: X1,
  },
  im = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  J1 = im.length,
  nf = (e) => (typeof e == "string" ? parseFloat(e) : e),
  rf = (e) => typeof e == "number" || D.test(e);
function b1(e, t, n, r, i, o) {
  i
    ? ((e.opacity = Q(0, n.opacity !== void 0 ? n.opacity : 1, ex(r))),
      (e.opacityExit = Q(t.opacity !== void 0 ? t.opacity : 1, 0, tx(r))))
    : o &&
      (e.opacity = Q(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < J1; s++) {
    const l = `border${im[s]}Radius`;
    let a = of(t, l),
      u = of(n, l);
    if (a === void 0 && u === void 0) continue;
    a || (a = 0),
      u || (u = 0),
      a === 0 || u === 0 || rf(a) === rf(u)
        ? ((e[l] = Math.max(Q(nf(a), nf(u), r), 0)),
          (lt.test(u) || lt.test(a)) && (e[l] += "%"))
        : (e[l] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = Q(t.rotate || 0, n.rotate || 0, r));
}
function of(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const ex = om(0, 0.5, Vh),
  tx = om(0.5, 0.95, q);
function om(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(bn(e, t, r)));
}
function sf(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Ie(e, t) {
  sf(e.x, t.x), sf(e.y, t.y);
}
function lf(e, t, n, r, i) {
  return (
    (e -= t), (e = Lo(e, 1 / n, r)), i !== void 0 && (e = Lo(e, 1 / i, r)), e
  );
}
function nx(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (lt.test(t) &&
      ((t = parseFloat(t)), (t = Q(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let l = Q(o.min, o.max, r);
  e === o && (l -= t),
    (e.min = lf(e.min, t, n, l, i)),
    (e.max = lf(e.max, t, n, l, i));
}
function af(e, t, [n, r, i], o, s) {
  nx(e, t[n], t[r], t[i], t.scale, o, s);
}
const rx = ["x", "scaleX", "originX"],
  ix = ["y", "scaleY", "originY"];
function uf(e, t, n, r) {
  af(e.x, t, rx, n ? n.x : void 0, r ? r.x : void 0),
    af(e.y, t, ix, n ? n.y : void 0, r ? r.y : void 0);
}
function cf(e) {
  return e.translate === 0 && e.scale === 1;
}
function sm(e) {
  return cf(e.x) && cf(e.y);
}
function ox(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function lm(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function ff(e) {
  return Ne(e.x) / Ne(e.y);
}
class sx {
  constructor() {
    this.members = [];
  }
  add(t) {
    uu(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (cu(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function df(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y;
  if (
    ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: a, rotateX: u, rotateY: c } = n;
    a && (r += `rotate(${a}deg) `),
      u && (r += `rotateX(${u}deg) `),
      c && (r += `rotateY(${c}deg) `);
  }
  const s = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (s !== 1 || l !== 1) && (r += `scale(${s}, ${l})`), r || "none";
}
const lx = (e, t) => e.depth - t.depth;
class ax {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    uu(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    cu(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(lx),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function ux(e, t) {
  const n = performance.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (et(r), e(o - t));
    };
  return z.read(r, !0), () => et(r);
}
function cx(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function fx(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function dx(e, t, n) {
  const r = ye(e) ? e : Ze(e);
  return r.start(au("", r, t, n)), r.animation;
}
const pf = ["", "X", "Y", "Z"],
  px = { visibility: "hidden" },
  hf = 1e3;
let hx = 0;
const on = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function am({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, l = t == null ? void 0 : t()) {
      (this.id = hx++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            (on.totalNodes =
              on.resolvedTargetDeltas =
              on.recalculatedProjection =
                0),
            this.nodes.forEach(yx),
            this.nodes.forEach(kx),
            this.nodes.forEach(Px),
            this.nodes.forEach(vx),
            cx(on);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = l ? l.root || l : this),
        (this.path = l ? [...l.path, l] : []),
        (this.parent = l),
        (this.depth = l ? l.depth + 1 : 0);
      for (let a = 0; a < this.path.length; a++)
        this.path[a].shouldResetTransform = !0;
      this.root === this && (this.nodes = new ax());
    }
    addEventListener(s, l) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new fu()),
        this.eventHandlers.get(s).add(l)
      );
    }
    notifyListeners(s, ...l) {
      const a = this.eventHandlers.get(s);
      a && a.notify(...l);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, l = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = fx(s)), (this.instance = s);
      const { layoutId: a, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        l && (u || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = ux(d, 250)),
            Qi.hasAnimatedSinceResize &&
              ((Qi.hasAnimatedSinceResize = !1), this.nodes.forEach(gf));
        });
      }
      a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          c &&
          (a || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: g,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v =
                  this.options.transition || c.getDefaultTransition() || Vx,
                { onLayoutAnimationStart: T, onLayoutAnimationComplete: m } =
                  c.getProps(),
                p = !this.targetLayout || !lm(this.targetLayout, y) || g,
                h = !d && g;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                h ||
                (d && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, h);
                const x = { ...lu(v, "layout"), onPlay: T, onComplete: m };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((x.delay = 0), (x.type = !1)),
                  this.startAnimation(x);
              } else
                d || gf(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        et(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(Cx),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: l, layout: a } = this.options;
      if (l === void 0 && !a) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(mf);
        return;
      }
      this.isUpdating || this.nodes.forEach(wx),
        (this.isUpdating = !1),
        this.nodes.forEach(Sx),
        this.nodes.forEach(mx),
        this.nodes.forEach(gx),
        this.clearAllSnapshots();
      const l = performance.now();
      (ne.delta = $t(0, 1e3 / 60, l - ne.timestamp)),
        (ne.timestamp = l),
        (ne.isProcessing = !0),
        Ms.update.process(ne),
        Ms.preRender.process(ne),
        Ms.render.process(ne),
        (ne.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(xx), this.sharedNodes.forEach(Tx);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        z.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      z.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let a = 0; a < this.path.length; a++) this.path[a].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = ee()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: l } = this.options;
      l &&
        l.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === s &&
        (l = !1),
        l &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: s,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!i) return;
      const s = this.isLayoutDirty || this.shouldResetTransform,
        l = this.projectionDelta && !sm(this.projectionDelta),
        a = this.getTransformTemplate(),
        u = a ? a(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (l || rn(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const l = this.measurePageBox();
      let a = this.removeElementScroll(l);
      return (
        s && (a = this.removeTransform(a)),
        Mx(a),
        {
          animationId: this.root.animationId,
          measuredBox: l,
          layoutBox: a,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: s } = this.options;
      if (!s) return ee();
      const l = s.measureViewportBox(),
        { scroll: a } = this.root;
      return a && (Lt(l.x, a.offset.x), Lt(l.y, a.offset.y)), l;
    }
    removeElementScroll(s) {
      const l = ee();
      Ie(l, s);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a],
          { scroll: c, options: f } = u;
        if (u !== this.root && c && f.layoutScroll) {
          if (c.isRoot) {
            Ie(l, s);
            const { scroll: d } = this.root;
            d && (Lt(l.x, -d.offset.x), Lt(l.y, -d.offset.y));
          }
          Lt(l.x, c.offset.x), Lt(l.y, c.offset.y);
        }
      }
      return l;
    }
    applyTransform(s, l = !1) {
      const a = ee();
      Ie(a, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !l &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          zn(a, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          rn(c.latestValues) && zn(a, c.latestValues);
      }
      return rn(this.latestValues) && zn(a, this.latestValues), a;
    }
    removeTransform(s) {
      const l = ee();
      Ie(l, s);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a];
        if (!u.instance || !rn(u.latestValues)) continue;
        $l(u.latestValues) && u.updateSnapshot();
        const c = ee(),
          f = u.measurePageBox();
        Ie(c, f),
          uf(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return rn(this.latestValues) && uf(l, this.latestValues), l;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== ne.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var l;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== a;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((l = this.parent) === null || l === void 0) &&
            l.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = ne.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1
            ? ((this.relativeParent = g),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = ee()),
              (this.relativeTargetOrigin = ee()),
              jr(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                g.layout.layoutBox
              ),
              Ie(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = ee()), (this.targetWithTransforms = ee())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                D1(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Ie(this.target, this.layout.layoutBox),
                em(this.target, this.targetDelta))
              : Ie(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g &&
            !!g.resumingFrom == !!this.resumingFrom &&
            !g.options.layoutScroll &&
            g.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = g),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = ee()),
                (this.relativeTargetOrigin = ee()),
                jr(this.relativeTargetOrigin, this.target, g.target),
                Ie(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          on.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          $l(this.parent.latestValues) ||
          bh(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const l = this.getLead(),
        a = !!this.resumingFrom || this !== l;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === ne.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || f))
      )
        return;
      Ie(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        g = this.treeScale.y;
      z1(this.layoutCorrected, this.treeScale, this.path, a),
        l.layout &&
          !l.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          (l.target = l.layout.layoutBox);
      const { target: y } = l;
      if (!y) {
        this.projectionTransform &&
          ((this.projectionDelta = In()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = In()),
        (this.projectionDeltaWithTransform = In()));
      const v = this.projectionTransform;
      Rr(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.projectionTransform = df(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== v ||
          this.treeScale.x !== d ||
          this.treeScale.y !== g) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y)),
        on.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(s, l = !1) {
      const a = this.snapshot,
        u = a ? a.latestValues : {},
        c = { ...this.latestValues },
        f = In();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !l);
      const d = ee(),
        g = a ? a.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        v = g !== y,
        T = this.getStack(),
        m = !T || T.members.length <= 1,
        p = !!(v && !m && this.options.crossfade === !0 && !this.path.some(Lx));
      this.animationProgress = 0;
      let h;
      (this.mixTargetDelta = (x) => {
        const S = x / 1e3;
        yf(f.x, s.x, S),
          yf(f.y, s.y, S),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (jr(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Ex(this.relativeTarget, this.relativeTargetOrigin, d, S),
            h && ox(this.relativeTarget, h) && (this.isProjectionDirty = !1),
            h || (h = ee()),
            Ie(h, this.relativeTarget)),
          v &&
            ((this.animationValues = c), b1(c, u, this.latestValues, S, p, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = S);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (et(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = z.update(() => {
          (Qi.hasAnimatedSinceResize = !0),
            (this.currentAnimation = dx(0, hf, {
              ...s,
              onUpdate: (l) => {
                this.mixTargetDelta(l), s.onUpdate && s.onUpdate(l);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(hf),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: l,
        target: a,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!l || !a || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          um(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          a = this.target || ee();
          const f = Ne(this.layout.layoutBox.x);
          (a.x.min = s.target.x.min), (a.x.max = a.x.min + f);
          const d = Ne(this.layout.layoutBox.y);
          (a.y.min = s.target.y.min), (a.y.max = a.y.min + d);
        }
        Ie(l, a),
          zn(l, c),
          Rr(this.projectionDeltaWithTransform, this.layoutCorrected, l, c);
      }
    }
    registerSharedNode(s, l) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new sx()),
        this.sharedNodes.get(s).add(l);
      const u = l.options.initialPromotionConfig;
      l.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(l)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: l } = this.options;
      return l
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: l } = this.options;
      return l
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: l, preserveFollowOpacity: a } = {}) {
      const u = this.getStack();
      u && u.promote(this, a),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        l && this.setOptions({ transition: l });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let l = !1;
      const { latestValues: a } = s;
      if (((a.rotate || a.rotateX || a.rotateY || a.rotateZ) && (l = !0), !l))
        return;
      const u = {};
      for (let c = 0; c < pf.length; c++) {
        const f = "rotate" + pf[c];
        a[f] && ((u[f] = a[f]), s.setStaticValue(f, 0));
      }
      s.render();
      for (const c in u) s.setStaticValue(c, u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var l, a;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return px;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Ki(s == null ? void 0 : s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const v = {};
        return (
          this.options.layoutId &&
            ((v.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (v.pointerEvents = Ki(s == null ? void 0 : s.pointerEvents) || "")),
          this.hasProjected &&
            !rn(this.latestValues) &&
            ((v.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          v
        );
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = df(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        c && (u.transform = c(d, u.transform));
      const { x: g, y } = this.projectionDelta;
      (u.transformOrigin = `${g.origin * 100}% ${y.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (a =
                    (l = d.opacity) !== null && l !== void 0
                      ? l
                      : this.latestValues.opacity) !== null && a !== void 0
                  ? a
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (u.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0);
      for (const v in So) {
        if (d[v] === void 0) continue;
        const { correct: T, applyTo: m } = So[v],
          p = u.transform === "none" ? d[v] : T(d[v], f);
        if (m) {
          const h = m.length;
          for (let x = 0; x < h; x++) u[m[x]] = p;
        } else u[v] = p;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            f === this
              ? Ki(s == null ? void 0 : s.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var l;
        return (l = s.currentAnimation) === null || l === void 0
          ? void 0
          : l.stop();
      }),
        this.root.nodes.forEach(mf),
        this.root.sharedNodes.clear();
    }
  };
}
function mx(e) {
  e.updateLayout();
}
function gx(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? ze((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            g = Ne(d);
          (d.min = r[f].min), (d.max = d.min + g);
        })
      : um(o, n.layoutBox, r) &&
        ze((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            g = Ne(r[f]);
          (d.max = d.min + g),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + g));
        });
    const l = In();
    Rr(l, r, n.layoutBox);
    const a = In();
    s ? Rr(a, e.applyTransform(i, !0), n.measuredBox) : Rr(a, r, n.layoutBox);
    const u = !sm(l);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: g } = f;
        if (d && g) {
          const y = ee();
          jr(y, n.layoutBox, d.layoutBox);
          const v = ee();
          jr(v, r, g.layoutBox),
            lm(y, v) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: a,
      layoutDelta: l,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function yx(e) {
  on.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function vx(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function xx(e) {
  e.clearSnapshot();
}
function mf(e) {
  e.clearMeasurements();
}
function wx(e) {
  e.isLayoutDirty = !1;
}
function Sx(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function gf(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function kx(e) {
  e.resolveTargetDelta();
}
function Px(e) {
  e.calcProjection();
}
function Cx(e) {
  e.resetRotation();
}
function Tx(e) {
  e.removeLeadSnapshot();
}
function yf(e, t, n) {
  (e.translate = Q(t.translate, 0, n)),
    (e.scale = Q(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function vf(e, t, n, r) {
  (e.min = Q(t.min, n.min, r)), (e.max = Q(t.max, n.max, r));
}
function Ex(e, t, n, r) {
  vf(e.x, t.x, n.x, r), vf(e.y, t.y, n.y, r);
}
function Lx(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Vx = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  xf = (e) =>
    typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e),
  wf = xf("applewebkit/") && !xf("chrome/") ? Math.round : q;
function Sf(e) {
  (e.min = wf(e.min)), (e.max = wf(e.max));
}
function Mx(e) {
  Sf(e.x), Sf(e.y);
}
function um(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !Wl(ff(t), ff(n), 0.2))
  );
}
const Dx = am({
    attachResizeListener: (e, t) => pt(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Bs = { current: void 0 },
  cm = am({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Bs.current) {
        const e = new Dx({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Bs.current = e);
      }
      return Bs.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  Ax = {
    pan: { Feature: Q1 },
    drag: { Feature: K1, ProjectionNode: cm, MeasureLayout: rm },
  },
  Rx = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function jx(e) {
  const t = Rx.exec(e);
  if (!t) return [,];
  const [, n, r] = t;
  return [n, r];
}
function Kl(e, t, n = 1) {
  const [r, i] = jx(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return Kh(s) ? parseFloat(s) : s;
  } else return _l(i) ? Kl(i, t, n + 1) : i;
}
function Nx(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  n && (n = { ...n }),
    e.values.forEach((i) => {
      const o = i.get();
      if (!_l(o)) return;
      const s = Kl(o, r);
      s && i.set(s);
    });
  for (const i in t) {
    const o = t[i];
    if (!_l(o)) continue;
    const s = Kl(o, r);
    s && ((t[i] = s), n || (n = {}), n[i] === void 0 && (n[i] = o));
  }
  return { target: t, transitionEnd: n };
}
const _x = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  fm = (e) => _x.has(e),
  Ox = (e) => Object.keys(e).some(fm),
  kf = (e) => e === wn || e === D,
  Pf = (e, t) => parseFloat(e.split(", ")[t]),
  Cf =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/);
      if (i) return Pf(i[1], t);
      {
        const o = r.match(/^matrix\((.+)\)$/);
        return o ? Pf(o[1], e) : 0;
      }
    },
  Fx = new Set(["x", "y", "z"]),
  Ix = li.filter((e) => !Fx.has(e));
function zx(e) {
  const t = [];
  return (
    Ix.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const er = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Cf(4, 13),
  y: Cf(5, 14),
};
er.translateX = er.x;
er.translateY = er.y;
const Bx = (e, t, n) => {
    const r = t.measureViewportBox(),
      i = t.current,
      o = getComputedStyle(i),
      { display: s } = o,
      l = {};
    s === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach((u) => {
        l[u] = er[u](r, o);
      }),
      t.render();
    const a = t.measureViewportBox();
    return (
      n.forEach((u) => {
        const c = t.getValue(u);
        c && c.jump(l[u]), (e[u] = er[u](a, o));
      }),
      e
    );
  },
  Ux = (e, t, n = {}, r = {}) => {
    (t = { ...t }), (r = { ...r });
    const i = Object.keys(t).filter(fm);
    let o = [],
      s = !1;
    const l = [];
    if (
      (i.forEach((a) => {
        const u = e.getValue(a);
        if (!e.hasValue(a)) return;
        let c = n[a],
          f = dr(c);
        const d = t[a];
        let g;
        if (Po(d)) {
          const y = d.length,
            v = d[0] === null ? 1 : 0;
          (c = d[v]), (f = dr(c));
          for (let T = v; T < y && d[T] !== null; T++)
            g ? es(dr(d[T]) === g) : (g = dr(d[T]));
        } else g = dr(d);
        if (f !== g)
          if (kf(f) && kf(g)) {
            const y = u.get();
            typeof y == "string" && u.set(parseFloat(y)),
              typeof d == "string"
                ? (t[a] = parseFloat(d))
                : Array.isArray(d) && g === D && (t[a] = d.map(parseFloat));
          } else
            f != null &&
            f.transform &&
            g != null &&
            g.transform &&
            (c === 0 || d === 0)
              ? c === 0
                ? u.set(g.transform(c))
                : (t[a] = f.transform(d))
              : (s || ((o = zx(e)), (s = !0)),
                l.push(a),
                (r[a] = r[a] !== void 0 ? r[a] : t[a]),
                u.jump(d));
      }),
      l.length)
    ) {
      const a = l.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = Bx(t, e, l);
      return (
        o.length &&
          o.forEach(([c, f]) => {
            e.getValue(c).set(f);
          }),
        e.render(),
        Ko && a !== null && window.scrollTo({ top: a }),
        { target: u, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function Wx(e, t, n, r) {
  return Ox(t) ? Ux(e, t, n, r) : { target: t, transitionEnd: r };
}
const Hx = (e, t, n, r) => {
    const i = Nx(e, t, r);
    return (t = i.target), (r = i.transitionEnd), Wx(e, t, n, r);
  },
  Ql = { current: null },
  dm = { current: !1 };
function $x() {
  if (((dm.current = !0), !!Ko))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Ql.current = e.matches);
      e.addListener(t), t();
    } else Ql.current = !1;
}
function Gx(e, t, n) {
  const { willChange: r } = t;
  for (const i in t) {
    const o = t[i],
      s = n[i];
    if (ye(o)) e.addValue(i, o), Eo(r) && r.add(i);
    else if (ye(s)) e.addValue(i, Ze(o, { owner: e })), Eo(r) && r.remove(i);
    else if (s !== o)
      if (e.hasValue(i)) {
        const l = e.getValue(i);
        !l.hasAnimated && l.set(o);
      } else {
        const l = e.getStaticValue(i);
        e.addValue(i, Ze(l !== void 0 ? l : o, { owner: e }));
      }
  }
  for (const i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
const Tf = new WeakMap(),
  pm = Object.keys(br),
  Kx = pm.length,
  Ef = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  Qx = Ya.length;
class Yx {
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      visualState: o,
    },
    s = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => z.render(this.render, !1, !0));
    const { latestValues: l, renderState: a } = o;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = a),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = s),
      (this.isControllingVariants = Xo(n)),
      (this.isVariantNode = qp(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const f in c) {
      const d = c[f];
      l[f] !== void 0 && ye(d) && (d.set(l[f], !1), Eo(u) && u.add(f));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    (this.current = t),
      Tf.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      dm.current || $x(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Ql.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Tf.delete(this.current),
      this.projection && this.projection.unmount(),
      et(this.notifyUpdate),
      et(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = xn.has(t),
      i = n.on("change", (s) => {
        (this.latestValues[t] = s),
          this.props.onUpdate && z.update(this.notifyUpdate, !1, !0),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      o = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      i(), o();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, i, o) {
    let s, l;
    for (let a = 0; a < Kx; a++) {
      const u = pm[a],
        {
          isEnabled: c,
          Feature: f,
          ProjectionNode: d,
          MeasureLayout: g,
        } = br[u];
      d && (s = d),
        c(n) &&
          (!this.features[u] && f && (this.features[u] = new f(this)),
          g && (l = g));
    }
    if (
      (this.type === "html" || this.type === "svg") &&
      !this.projection &&
      s
    ) {
      this.projection = new s(
        this.latestValues,
        this.parent && this.parent.projection
      );
      const {
        layoutId: a,
        layout: u,
        drag: c,
        dragConstraints: f,
        layoutScroll: d,
        layoutRoot: g,
      } = n;
      this.projection.setOptions({
        layoutId: a,
        layout: u,
        alwaysMeasureLayout: !!c || (f && On(f)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: o,
        layoutScroll: d,
        layoutRoot: g,
      });
    }
    return l;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : ee();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Ef.length; r++) {
      const i = Ef[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = t["on" + i];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = Gx(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < Qx; r++) {
      const i = Ya[r],
        o = this.props[i];
      (Jr(o) || o === !1) && (n[i] = o);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    n !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Ze(n, { owner: this })), this.addValue(t, r)),
      r
    );
  }
  readValue(t) {
    var n;
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : (n = this.getBaseTargetFromProps(this.props, t)) !== null &&
        n !== void 0
      ? n
      : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props,
      i =
        typeof r == "string" || typeof r == "object"
          ? (n = tu(this.props, r)) === null || n === void 0
            ? void 0
            : n[t]
          : void 0;
    if (r && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !ye(o)
      ? o
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new fu()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class hm extends Yx {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: n, ...r },
    { transformValues: i },
    o
  ) {
    let s = f1(r, t || {}, this);
    if ((i && (n && (n = i(n)), r && (r = i(r)), s && (s = i(s))), o)) {
      u1(this, r, s);
      const l = Hx(this, r, s, n);
      (n = l.transitionEnd), (r = l.target);
    }
    return { transition: t, transitionEnd: n, ...r };
  }
}
function Xx(e) {
  return window.getComputedStyle(e);
}
class Zx extends hm {
  constructor() {
    super(...arguments), (this.type = "html");
  }
  readValueFromInstance(t, n) {
    if (xn.has(n)) {
      const r = su(n);
      return (r && r.default) || 0;
    } else {
      const r = Xx(t),
        i = (nh(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return tm(t, n);
  }
  build(t, n, r, i) {
    Za(t, n, r, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return eu(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    ye(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, i) {
    ah(t, n, r, i);
  }
}
class qx extends hm {
  constructor() {
    super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (xn.has(n)) {
      const r = su(n);
      return (r && r.default) || 0;
    }
    return (n = uh.has(n) ? n : Ka(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return ee();
  }
  scrapeMotionValuesFromProps(t, n) {
    return fh(t, n);
  }
  build(t, n, r, i) {
    Ja(t, n, r, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    ch(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = ba(t.tagName)), super.mount(t);
  }
}
const Jx = (e, t) =>
    Xa(e)
      ? new qx(t, { enableHardwareAcceleration: !1 })
      : new Zx(t, { enableHardwareAcceleration: !0 }),
  bx = { layout: { ProjectionNode: cm, MeasureLayout: rm } },
  ew = { ...E1, ...Yv, ...Ax, ...bx },
  O = rv((e, t) => _v(e, t, ew, Jx));
function mm(e) {
  const t = qo(() => Ze(e)),
    { isStatic: n } = M.useContext($o);
  if (n) {
    const [, r] = M.useState(e);
    M.useEffect(() => t.on("change", r), []);
  }
  return t;
}
const tw = (e) => e && typeof e == "object" && e.mix,
  nw = (e) => (tw(e) ? e.mix : void 0);
function rw(...e) {
  const t = !Array.isArray(e[0]),
    n = t ? 0 : -1,
    r = e[0 + n],
    i = e[1 + n],
    o = e[2 + n],
    s = e[3 + n],
    l = ts(i, o, { mixer: nw(o[0]), ...s });
  return t ? l(r) : l;
}
function gm(e, t) {
  const n = mm(t()),
    r = () => n.set(t());
  return (
    r(),
    Qo(() => {
      const i = () => z.update(r, !1, !0),
        o = e.map((s) => s.on("change", i));
      return () => {
        o.forEach((s) => s()), et(r);
      };
    }),
    n
  );
}
function iw(e) {
  (Ar.current = []), e();
  const t = gm(Ar.current, e);
  return (Ar.current = void 0), t;
}
function Yl(e, t, n, r) {
  if (typeof e == "function") return iw(e);
  const i = typeof t == "function" ? t : rw(t, n, r);
  return Array.isArray(e) ? Lf(e, i) : Lf([e], ([o]) => i(o));
}
function Lf(e, t) {
  const n = qo(() => []);
  return gm(e, () => {
    n.length = 0;
    const r = e.length;
    for (let i = 0; i < r; i++) n[i] = e[i].get();
    return t(n);
  });
}
function ow(e, t = {}) {
  const { isStatic: n } = M.useContext($o),
    r = M.useRef(null),
    i = mm(ye(e) ? e.get() : e),
    o = () => {
      r.current && r.current.stop();
    };
  return (
    M.useInsertionEffect(
      () =>
        i.attach((s, l) => {
          if (n) return l(s);
          if (
            (o(),
            (r.current = ei({
              keyframes: [i.get(), s],
              velocity: i.getVelocity(),
              type: "spring",
              restDelta: 0.001,
              restSpeed: 0.01,
              ...t,
              onUpdate: l,
            })),
            !ne.isProcessing)
          ) {
            const a = performance.now() - ne.timestamp;
            a < 30 && (r.current.time = at(a));
          }
          return i.get();
        }, o),
      [JSON.stringify(t)]
    ),
    Qo(() => {
      if (ye(e)) return e.on("change", (s) => i.set(parseFloat(s)));
    }, [i]),
    i
  );
}
function ym(e, t, n) {
  var r;
  if (typeof e == "string") {
    let i = document;
    t && (es(!!t.current), (i = t.current)),
      n
        ? (((r = n[e]) !== null && r !== void 0) ||
            (n[e] = i.querySelectorAll(e)),
          (e = n[e]))
        : (e = i.querySelectorAll(e));
  } else e instanceof Element && (e = [e]);
  return Array.from(e || []);
}
const Yi = new WeakMap();
let Ct;
function sw(e, t) {
  if (t) {
    const { inlineSize: n, blockSize: r } = t[0];
    return { width: n, height: r };
  } else
    return e instanceof SVGElement && "getBBox" in e
      ? e.getBBox()
      : { width: e.offsetWidth, height: e.offsetHeight };
}
function lw({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = Yi.get(e)) === null ||
    r === void 0 ||
    r.forEach((i) => {
      i({
        target: e,
        contentSize: t,
        get size() {
          return sw(e, n);
        },
      });
    });
}
function aw(e) {
  e.forEach(lw);
}
function uw() {
  typeof ResizeObserver > "u" || (Ct = new ResizeObserver(aw));
}
function cw(e, t) {
  Ct || uw();
  const n = ym(e);
  return (
    n.forEach((r) => {
      let i = Yi.get(r);
      i || ((i = new Set()), Yi.set(r, i)),
        i.add(t),
        Ct == null || Ct.observe(r);
    }),
    () => {
      n.forEach((r) => {
        const i = Yi.get(r);
        i == null || i.delete(t),
          (i != null && i.size) || Ct == null || Ct.unobserve(r);
      });
    }
  );
}
const Xi = new Set();
let Nr;
function fw() {
  (Nr = () => {
    const e = { width: window.innerWidth, height: window.innerHeight },
      t = { target: window, size: e, contentSize: e };
    Xi.forEach((n) => n(t));
  }),
    window.addEventListener("resize", Nr);
}
function dw(e) {
  return (
    Xi.add(e),
    Nr || fw(),
    () => {
      Xi.delete(e), !Xi.size && Nr && (Nr = void 0);
    }
  );
}
function pw(e, t) {
  return typeof e == "function" ? dw(e) : cw(e, t);
}
const hw = 50,
  Vf = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  mw = () => ({ time: 0, x: Vf(), y: Vf() }),
  gw = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  };
function Mf(e, t, n, r) {
  const i = n[t],
    { length: o, position: s } = gw[t],
    l = i.current,
    a = n.time;
  (i.current = e["scroll" + s]),
    (i.scrollLength = e["scroll" + o] - e["client" + o]),
    (i.offset.length = 0),
    (i.offset[0] = 0),
    (i.offset[1] = i.scrollLength),
    (i.progress = bn(0, i.scrollLength, i.current));
  const u = r - a;
  i.velocity = u > hw ? 0 : ou(i.current - l, u);
}
function yw(e, t, n) {
  Mf(e, "x", t, n), Mf(e, "y", t, n), (t.time = n);
}
function vw(e, t) {
  const n = { x: 0, y: 0 };
  let r = e;
  for (; r && r !== t; )
    if (r instanceof HTMLElement)
      (n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent);
    else if (r.tagName === "svg") {
      const i = r.getBoundingClientRect();
      r = r.parentElement;
      const o = r.getBoundingClientRect();
      (n.x += i.left - o.left), (n.y += i.top - o.top);
    } else if (r instanceof SVGGraphicsElement) {
      const { x: i, y: o } = r.getBBox();
      (n.x += i), (n.y += o);
      let s = null,
        l = r.parentNode;
      for (; !s; ) l.tagName === "svg" && (s = l), (l = r.parentNode);
      r = s;
    } else break;
  return n;
}
const xw = {
    Enter: [
      [0, 1],
      [1, 1],
    ],
    Exit: [
      [0, 0],
      [1, 0],
    ],
    Any: [
      [1, 0],
      [0, 1],
    ],
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  Xl = { start: 0, center: 0.5, end: 1 };
function Df(e, t, n = 0) {
  let r = 0;
  if ((Xl[e] !== void 0 && (e = Xl[e]), typeof e == "string")) {
    const i = parseFloat(e);
    e.endsWith("px")
      ? (r = i)
      : e.endsWith("%")
      ? (e = i / 100)
      : e.endsWith("vw")
      ? (r = (i / 100) * document.documentElement.clientWidth)
      : e.endsWith("vh")
      ? (r = (i / 100) * document.documentElement.clientHeight)
      : (e = i);
  }
  return typeof e == "number" && (r = t * e), n + r;
}
const ww = [0, 0];
function Sw(e, t, n, r) {
  let i = Array.isArray(e) ? e : ww,
    o = 0,
    s = 0;
  return (
    typeof e == "number"
      ? (i = [e, e])
      : typeof e == "string" &&
        ((e = e.trim()),
        e.includes(" ") ? (i = e.split(" ")) : (i = [e, Xl[e] ? e : "0"])),
    (o = Df(i[0], n, r)),
    (s = Df(i[1], t)),
    o - s
  );
}
const kw = { x: 0, y: 0 };
function Pw(e) {
  return "getBBox" in e && e.tagName !== "svg"
    ? e.getBBox()
    : { width: e.clientWidth, height: e.clientHeight };
}
function Cw(e, t, n) {
  let { offset: r = xw.All } = n;
  const { target: i = e, axis: o = "y" } = n,
    s = o === "y" ? "height" : "width",
    l = i !== e ? vw(i, e) : kw,
    a = i === e ? { width: e.scrollWidth, height: e.scrollHeight } : Pw(i),
    u = { width: e.clientWidth, height: e.clientHeight };
  t[o].offset.length = 0;
  let c = !t[o].interpolate;
  const f = r.length;
  for (let d = 0; d < f; d++) {
    const g = Sw(r[d], u[s], a[s], l[o]);
    !c && g !== t[o].interpolatorOffsets[d] && (c = !0), (t[o].offset[d] = g);
  }
  c &&
    ((t[o].interpolate = ts(t[o].offset, Uh(r))),
    (t[o].interpolatorOffsets = [...t[o].offset])),
    (t[o].progress = t[o].interpolate(t[o].current));
}
function Tw(e, t = e, n) {
  if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
    let r = t;
    for (; r && r !== e; )
      (n.x.targetOffset += r.offsetLeft),
        (n.y.targetOffset += r.offsetTop),
        (r = r.offsetParent);
  }
  (n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
    (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
    (n.x.containerLength = e.clientWidth),
    (n.y.containerLength = e.clientHeight);
}
function Ew(e, t, n, r = {}) {
  return {
    measure: () => Tw(e, r.target, n),
    update: (i) => {
      yw(e, n, i), (r.offset || r.target) && Cw(e, n, r);
    },
    notify: () => t(n),
  };
}
const hr = new WeakMap(),
  Af = new WeakMap(),
  Us = new WeakMap(),
  Rf = (e) => (e === document.documentElement ? window : e);
function Lw(e, { container: t = document.documentElement, ...n } = {}) {
  let r = Us.get(t);
  r || ((r = new Set()), Us.set(t, r));
  const i = mw(),
    o = Ew(t, e, i, n);
  if ((r.add(o), !hr.has(t))) {
    const l = () => {
        for (const d of r) d.measure();
      },
      a = () => {
        for (const d of r) d.update(ne.timestamp);
      },
      u = () => {
        for (const d of r) d.notify();
      },
      c = () => {
        z.read(l, !1, !0), z.read(a, !1, !0), z.update(u, !1, !0);
      };
    hr.set(t, c);
    const f = Rf(t);
    window.addEventListener("resize", c, { passive: !0 }),
      t !== document.documentElement && Af.set(t, pw(t, c)),
      f.addEventListener("scroll", c, { passive: !0 });
  }
  const s = hr.get(t);
  return (
    z.read(s, !1, !0),
    () => {
      var l;
      et(s);
      const a = Us.get(t);
      if (!a || (a.delete(o), a.size)) return;
      const u = hr.get(t);
      hr.delete(t),
        u &&
          (Rf(t).removeEventListener("scroll", u),
          (l = Af.get(t)) === null || l === void 0 || l(),
          window.removeEventListener("resize", u));
    }
  );
}
function jf(e, t) {
  xh(!!(!t || t.current));
}
const Vw = () => ({
  scrollX: Ze(0),
  scrollY: Ze(0),
  scrollXProgress: Ze(0),
  scrollYProgress: Ze(0),
});
function du({ container: e, target: t, layoutEffect: n = !0, ...r } = {}) {
  const i = qo(Vw);
  return (
    (n ? Qo : M.useEffect)(
      () => (
        jf("target", t),
        jf("container", e),
        Lw(
          ({ x: s, y: l }) => {
            i.scrollX.set(s.current),
              i.scrollXProgress.set(s.progress),
              i.scrollY.set(l.current),
              i.scrollYProgress.set(l.progress);
          },
          {
            ...r,
            container: (e == null ? void 0 : e.current) || void 0,
            target: (t == null ? void 0 : t.current) || void 0,
          }
        )
      ),
      [e, t, JSON.stringify(r.offset)]
    ),
    i
  );
}
const Mw = { some: 0, all: 1 };
function Dw(e, t, { root: n, margin: r, amount: i = "some" } = {}) {
  const o = ym(e),
    s = new WeakMap(),
    l = (u) => {
      u.forEach((c) => {
        const f = s.get(c.target);
        if (c.isIntersecting !== !!f)
          if (c.isIntersecting) {
            const d = t(c);
            typeof d == "function" ? s.set(c.target, d) : a.unobserve(c.target);
          } else f && (f(c), s.delete(c.target));
      });
    },
    a = new IntersectionObserver(l, {
      root: n,
      rootMargin: r,
      threshold: typeof i == "number" ? i : Mw[i],
    });
  return o.forEach((u) => a.observe(u)), () => a.disconnect();
}
function vm(e, { root: t, margin: n, amount: r, once: i = !1 } = {}) {
  const [o, s] = M.useState(!1);
  return (
    M.useEffect(() => {
      if (!e.current || (i && o)) return;
      const l = () => (s(!0), i ? void 0 : () => s(!1)),
        a = { root: (t && t.current) || void 0, margin: n, amount: r };
      return Dw(e.current, l, a);
    }, [t, e, n, i, r]),
    o
  );
}
const ti = { _origin: "https://api.emailjs.com" },
  Aw = (e, t = "https://api.emailjs.com") => {
    (ti._userID = e), (ti._origin = t);
  },
  xm = (e, t, n) => {
    if (!e)
      throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
    if (!t)
      throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!n)
      throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
    return !0;
  };
class Nf {
  constructor(t) {
    (this.status = t ? t.status : 0),
      (this.text = t ? t.responseText : "Network Error");
  }
}
const wm = (e, t, n = {}) =>
    new Promise((r, i) => {
      const o = new XMLHttpRequest();
      o.addEventListener("load", ({ target: s }) => {
        const l = new Nf(s);
        l.status === 200 || l.text === "OK" ? r(l) : i(l);
      }),
        o.addEventListener("error", ({ target: s }) => {
          i(new Nf(s));
        }),
        o.open("POST", ti._origin + e, !0),
        Object.keys(n).forEach((s) => {
          o.setRequestHeader(s, n[s]);
        }),
        o.send(t);
    }),
  Rw = (e, t, n, r) => {
    const i = r || ti._userID;
    return (
      xm(i, e, t),
      wm(
        "/api/v1.0/email/send",
        JSON.stringify({
          lib_version: "3.12.1",
          user_id: i,
          service_id: e,
          template_id: t,
          template_params: n,
        }),
        { "Content-type": "application/json" }
      )
    );
  },
  jw = (e) => {
    let t;
    if (
      (typeof e == "string" ? (t = document.querySelector(e)) : (t = e),
      !t || t.nodeName !== "FORM")
    )
      throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
    return t;
  },
  Nw = (e, t, n, r) => {
    const i = r || ti._userID,
      o = jw(n);
    xm(i, e, t);
    const s = new FormData(o);
    return (
      s.append("lib_version", "3.12.1"),
      s.append("service_id", e),
      s.append("template_id", t),
      s.append("user_id", i),
      wm("/api/v1.0/email/send-form", s)
    );
  },
  _w = { init: Aw, send: Rw, sendForm: Nw },
  Pn = {
    initial: { y: 500, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  },
  Ow = () => {
    const e = M.useRef(),
      t = M.useRef(),
      [n, r] = M.useState(!1),
      [i, o] = M.useState(!1);
    vm(e, { margin: "-100px" });
    const s = (l) => {
      l.preventDefault(),
        _w
          .sendForm(
            "service_94y20xo",
            "template_v10u2oh",
            t.current,
            "pX_2hasGmGcuvjXIW"
          )
          .then(
            (a) => {
              o(!0);
            },
            (a) => {
              r(!0);
            }
          );
    };
    return w.jsxs(O.div, {
      ref: e,
      className: "contact",
      variants: Pn,
      initial: "initial",
      whileInView: "animate",
      children: [
        w.jsxs(O.div, {
          className: "textContainer",
          variants: Pn,
          children: [
            w.jsx(O.h1, { variants: Pn, children: "Let’s Connect!" }),
            w.jsxs(O.div, {
              className: "item",
              variants: Pn,
              children: [
                w.jsx("h2", { children: "Mail" }),
                w.jsx("span", { children: "maharajakumar28@gmail.com" }),
              ],
            }),
            w.jsxs(O.div, {
              className: "item",
              variants: Pn,
              children: [
                w.jsx("h2", { children: "Phone" }),
                w.jsx("span", { children: "+91 9080835761" }),
              ],
            }),
          ],
        }),
        w.jsx("div", {
          className: "formContainer",
          children: w.jsxs(O.form, {
            ref: t,
            onSubmit: s,
            variants: Pn,
            children: [
              w.jsx("input", {
                type: "text",
                required: !0,
                placeholder: "Name",
                name: "name",
              }),
              w.jsx("input", {
                type: "email",
                required: !0,
                placeholder: "Email",
                name: "email",
              }),
              w.jsx("textarea", {
                rows: 8,
                placeholder: "Message",
                name: "message",
              }),
              w.jsx("button", { children: "Submit" }),
              n && "Error",
              i && "Success",
            ],
          }),
        }),
      ],
    });
  };
const en = {
    initial: { x: -500, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, staggerChildren: 0.1 },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: { duration: 2, repeat: 1 / 0 },
    },
  },
  Fw = {
    initial: { x: 0 },
    animate: {
      x: "-470%",
      transition: { repeat: 1 / 0, repeatType: "mirror", duration: 20 },
    },
  },
  Iw = () =>
    w.jsxs("div", {
      className: "hero",
      children: [
        w.jsx("div", {
          className: "wrapper",
          children: w.jsxs(O.div, {
            className: "textContainer",
            variants: en,
            initial: "initial",
            animate: "animate",
            children: [
              w.jsx(O.h2, { variants: en, children: "MAHARAJA KUMAR" }),
              w.jsx(O.h1, { variants: en, children: "App developer" }),
              w.jsxs(O.div, {
                variants: en,
                children: [
                  w.jsx(O.button, {
                    className: "button",
                    variants: en,
                    children: "See my Works",
                  }),
                  w.jsx(O.button, {
                    className: "button",
                    variants: en,
                    children: "Contact Me",
                  }),
                ],
              }),
              w.jsx(O.img, {
                variants: en,
                animate: "scrollButton",
                src: "../scroll.png",
                alt: "",
              }),
            ],
          }),
        }),
        w.jsx(O.div, {
          className: "slidingTextContainer",
          variants: Fw,
          initial: "initial",
          animate: "animate",
          children: "Mobile and Web applications",
        }),
        w.jsx("div", {
          className: "imageContainer",
          children: w.jsx("img", { src: "../hero1.png", alt: "" }),
        }),
      ],
    });
const zw = {
    open: { transition: { staggerChildren: 0.1 } },
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  },
  Bw = { open: { y: 0, opacity: 1 }, closed: { y: 50, opacity: 0 } },
  Uw = () => {
    const e = ["Homepage", "Services", "Portfolio", "Contact", "About"];
    return w.jsx(O.div, {
      className: "links",
      variants: zw,
      children: e.map((t) =>
        w.jsx(
          O.a,
          {
            href: `#${t}`,
            variants: Bw,
            whileHover: { scale: 1.1 },
            whileTap: { scale: 0.95 },
            children: t,
          },
          t
        )
      ),
    });
  };
const Ww = ({ setOpen: e }) =>
    w.jsx("button", {
      onClick: () => e((t) => !t),
      children: w.jsxs("svg", {
        width: "23",
        height: "23",
        viewBox: "0 0 23 23",
        children: [
          w.jsx(O.path, {
            strokeWidth: "3",
            stroke: "black",
            strokeLinecap: "round",
            variants: {
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            },
          }),
          w.jsx(O.path, {
            strokeWidth: "3",
            stroke: "black",
            strokeLinecap: "round",
            d: "M 2 9.423 L 20 9.423",
            variants: { closed: { opacity: 1 }, open: { opacity: 0 } },
          }),
          w.jsx(O.path, {
            strokeWidth: "3",
            stroke: "black",
            strokeLinecap: "round",
            variants: {
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            },
          }),
        ],
      }),
    }),
  Hw = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: { type: "spring", stiffness: 20 },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: { delay: 0.5, type: "spring", stiffness: 400, damping: 40 },
    },
  },
  $w = () => {
    const [e, t] = M.useState(!1);
    return w.jsxs(O.div, {
      className: "sidebar",
      animate: e ? "open" : "closed",
      children: [
        w.jsx(O.div, {
          className: "bg",
          variants: Hw,
          children: w.jsx(Uw, {}),
        }),
        w.jsx(Ww, { setOpen: t }),
      ],
    });
  },
  Gw = () =>
    w.jsxs("div", {
      className: "navbar",
      children: [
        w.jsx($w, {}),
        w.jsxs("div", {
          className: "wrapper",
          children: [
            w.jsx(O.span, {
              initial: { opacity: 0, scale: 0.5 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.5 },
              children: "Maharaja Kumar",
            }),
            w.jsxs("div", {
              className: "social",
              children: [
                w.jsx("a", {
                  href: "#",
                  children: w.jsx("img", { src: "../facebook.png", alt: "" }),
                }),
                w.jsx("a", {
                  href: "#",
                  children: w.jsx("img", { src: "../instagram.png", alt: "" }),
                }),
                w.jsx("a", {
                  href: "#",
                  children: w.jsx("img", {
                    src: "../threads.png",
                    alt: "threads",
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
const _f = ({ type: e }) => {
  const t = M.useRef(),
    { scrollYProgress: n } = du({
      target: t,
      offset: ["start start", "end start"],
    }),
    r = Yl(n, [0, 1], ["0%", "500%"]),
    i = Yl(n, [0, 1], ["0%", "100%"]);
  return w.jsxs("div", {
    className: "parallax",
    ref: t,
    style: {
      background:
        e === "services"
          ? "linear-gradient(180deg, #111132, #0c0c1d)"
          : "linear-gradient(180deg, #111132, #505064)",
    },
    children: [
      w.jsx(O.h1, {
        style: { y: r },
        children: e === "services" ? "What I Do?" : "What I Did?",
      }),
      w.jsx(O.div, { className: "mountains" }),
      w.jsx(O.div, {
        className: "planets",
        style: {
          y: i,
          backgroundImage: `url(${
            e === "services" ? "../planets.png" : "../sun.png"
          })`,
        },
      }),
      w.jsx(O.div, {
        className: "planets",
        style: {
          y: i,
          backgroundImage: `url(${
            e === "services" ? "../planets.png" : ".../sun.png"
          })`,
        },
      }),
      w.jsx(O.div, { style: { x: i }, className: "stars" }),
    ],
  });
};
const Kw = [
    {
      id: 1,
      title: "RoomMate React Native",
      buttonText: "Download",
      url: "",
      img: "../roommate.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    },
    {
      id: 2,
      title: "Music App React Native",
      buttonText: "Download",
      url: "",
      img: "../music.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    },
    {
      id: 3,
      title: "Ecommerce React Native",
      buttonText: "Download",
      url: "",
      img: "../e_commerce_app.webp",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    },
    {
      id: 4,
      title: "Blog React",
      buttonText: "See Demo",
      url: "",
      img: "../blog.webp",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    },
    {
      id: 5,
      title: "Ecommerce Next",
      buttonText: "See Demo",
      url: "",
      img: "../e_commerce_web.webp",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    },
  ],
  Qw = ({ item: e }) => {
    const t = M.useRef(),
      { scrollYProgress: n } = du({ target: t }),
      r = Yl(n, [0, 1], [-300, 300]);
    return w.jsx("section", {
      children: w.jsx("div", {
        className: "container",
        children: w.jsxs("div", {
          className: "wrapper",
          children: [
            w.jsx("div", {
              className: "imageContainer",
              ref: t,
              children: w.jsx("img", { src: e.img, alt: "" }),
            }),
            w.jsxs(O.div, {
              className: "textContainer",
              style: { y: r },
              children: [
                w.jsx("h2", { children: e.title }),
                w.jsx("p", { children: e.desc }),
                w.jsx("button", { children: e.buttonText }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  Yw = () => {
    const e = M.useRef(),
      { scrollYProgress: t } = du({
        target: e,
        offset: ["end end", "start start"],
      }),
      n = ow(t, { stiffness: 100, damping: 30 });
    return w.jsxs("div", {
      className: "portfolio",
      ref: e,
      children: [
        w.jsxs("div", {
          className: "progress",
          children: [
            w.jsx("h1", { children: "Featured Works" }),
            w.jsx(O.div, { style: { scaleX: n }, className: "progressBar" }),
          ],
        }),
        Kw.map((r) => w.jsx(Qw, { item: r }, r.id)),
      ],
    });
  };
const ji = {
    initial: { x: -500, y: 100, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: { duration: 1, staggerChildren: 0.1 },
    },
  },
  Xw = () => {
    const e = M.useRef();
    return (
      vm(e, { margin: "-100px" }),
      w.jsxs(O.div, {
        className: "services",
        variants: ji,
        initial: "initial",
        ref: e,
        animate: "animate",
        children: [
          w.jsxs(O.div, {
            className: "textContainer",
            variants: ji,
            children: [
              w.jsxs("p", {
                children: [
                  "Connect Today",
                  w.jsx("br", {}),
                  "Transforming Ideas into Digital Reality",
                ],
              }),
              w.jsx("hr", {}),
            ],
          }),
          w.jsxs(O.div, {
            className: "titleContainer",
            variants: ji,
            children: [
              w.jsx("div", {
                className: "title",
                children: w.jsxs("h1", {
                  children: [
                    "Building",
                    " ",
                    w.jsx(O.b, {
                      whileHover: { color: "#58D68D" },
                      children: "Seamless",
                    }),
                  ],
                }),
              }),
              w.jsx("div", {
                className: "title",
                children: w.jsxs("h1", {
                  children: [
                    w.jsx(O.b, {
                      whileHover: { color: "#58D68D" },
                      children: "Mobile and Web",
                    }),
                    " ",
                    "Solutions.",
                  ],
                }),
              }),
            ],
          }),
          w.jsxs(O.div, {
            className: "listContainer",
            variants: ji,
            children: [
              w.jsxs(O.div, {
                className: "box",
                whileHover: { background: "lightgray", color: "black" },
                children: [
                  w.jsxs("div", {
                    className: "listTitleContainer",
                    children: [
                      w.jsx("h2", { children: "React Native" }),
                      w.jsxs("div", {
                        style: {
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          gap: "10px",
                        },
                        children: [
                          w.jsx("img", { src: "../react.png", alt: "" }),
                          w.jsx("img", { src: "../expo.png", alt: "" }),
                        ],
                      }),
                    ],
                  }),
                  w.jsx("p", {
                    children:
                      "I excel in React Native development, JavaScript, Redux/Context APIs, native module integration, UI/UX knowledge, RESTful APIs, and testing frameworks like Jest and React Native Testing Library, with proficient Git version control.",
                  }),
                ],
              }),
              w.jsxs(O.div, {
                className: "box",
                whileHover: { background: "lightgray", color: "black" },
                children: [
                  w.jsxs("div", {
                    className: "listTitleContainer",
                    children: [
                      w.jsx("h2", { children: "React" }),
                      w.jsx("img", { src: "../react.png", alt: "" }),
                    ],
                  }),
                  w.jsx("p", {
                    children:
                      "I excel in React.js development, JavaScript, Redux/Context APIs, React Router and Material-UI, RESTful APIs, and testing frameworks like Jest and React Testing Library, with proficient Git version control.",
                  }),
                ],
              }),
              w.jsxs(O.div, {
                className: "box",
                whileHover: { background: "lightgray", color: "black" },
                children: [
                  w.jsxs("div", {
                    className: "listTitleContainer",
                    children: [
                      w.jsx("h2", { children: "Next" }),
                      w.jsx("img", { src: "../next.png", alt: "" }),
                    ],
                  }),
                  w.jsx("p", {
                    children:
                      "I excel in Next.js development, JavaScript, SSR snd SSG(CSR), Redux/Context APIs, Routing with Next.js and React Router, Material-UI and Tailwind CSS, RESTful APIs, MongoDB and Prisma ORM, and testing frameworks like Jest and React Testing Library, with proficient Git version control.",
                  }),
                ],
              }),
              w.jsxs(O.div, {
                className: "box",
                whileHover: { background: "lightgray", color: "black" },
                children: [
                  w.jsxs("div", {
                    className: "listTitleContainer",
                    children: [
                      w.jsx("h2", { children: "Express" }),
                      w.jsx("img", { src: "../express.png", alt: "" }),
                    ],
                  }),
                  w.jsx("p", {
                    children:
                      "I excel in Express.js development, Node.js and JavaScript, RESTful API design principles, middleware integration and route handling, authentication and authorization mechanisms (JWT and OAuth), database integration with MongoDB and MySQL, and Mocha, with proficient Git version control.",
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  },
  Zw = () =>
    w.jsxs("div", {
      children: [
        w.jsxs("section", {
          id: "Homepage",
          children: [w.jsx(Gw, {}), w.jsx(Iw, {})],
        }),
        w.jsx("section", {
          id: "Services",
          children: w.jsx(_f, { type: "services" }),
        }),
        w.jsx("section", { children: w.jsx(Xw, {}) }),
        w.jsx("section", {
          id: "Portfolio",
          children: w.jsx(_f, { type: "portfolio" }),
        }),
        w.jsx(Yw, {}),
        w.jsx("section", { id: "Contact", children: w.jsx(Ow, {}) }),
      ],
    });
Ws.createRoot(document.getElementById("root")).render(
  w.jsx(ea.StrictMode, { children: w.jsx(Zw, {}) })
);
