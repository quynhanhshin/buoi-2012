import React, { useState } from "react";

export default function Calc() {
    const [A, setA] = useState(0);
    const [B, setB] = useState(0);
    const [kq, setKq] = useState("0");
    return (
        <div>
            <label>Nhập a</label> <input type="text" value={A} onChange={(e) => setA(e.target.value)} />
            <br />
            <label>Nhập b</label> <input type="text" value={B} onChange={(e) => setB(e.target.value)} />
            <br />
            <button onClick={() => setKq(`${A} + ${B} = ${A * 1 + B * 1}`)}>Cộng</button>
            <button onClick={() => setKq(`${A} - ${B} = ${A - B}`)}>Trừ</button>
            <button onClick={() => setKq(`${A} * ${B} = ${A * B}`)}>Nhân</button>
            <button onClick={() => setKq(`${A} / ${B} = ${A / B}`)}>Chia</button>
            <p>{kq}</p>
        </div>
    );
}
