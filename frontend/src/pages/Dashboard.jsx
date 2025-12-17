import React from "react";
import Case from "../components/Case";
import { useEffect } from "react";

export default function Dashboard() {
    useEffect(() => {
        document.title = "Dashboard";
    });

    return (
        <Case>
            <div className="section-header px-4 tw-rounded-none tw-shadow-md tw-shadow-gray-200 lg:tw-rounded-lg">
                <h1 className="mb-1 tw-text-lg">Dashboard</h1>
            </div>

            <div className="section-body">
                <div className="card">
                    <div className="card-body px-0">
                        <h3>Tabel Dashboard</h3>
                        <p className="px-4">
Dashboard SOMESTOCK dirancang untuk membantu pengguna dalam mengelola dan memantau stok barang secara terpusat dan efisien. Melalui tampilan yang sederhana dan informatif, pengguna dapat melihat ringkasan data inventori, aktivitas barang masuk dan keluar, serta kondisi stok terkini secara real-time, sehingga pengelolaan barang menjadi lebih rapi dan terkontrol.
Dengan SOMESTOCK, proses pencatatan dan pelaporan inventori menjadi lebih akurat dan sistematis. Informasi yang ditampilkan pada dashboard mendukung pengambilan keputusan yang cepat dan tepat, membantu mencegah kekurangan maupun kelebihan stok, serta meningkatkan efektivitas operasional dalam menjalankan aktivitas bisnis sehari-hari.
                        </p>
                    </div>
                </div>
            </div>
        </Case>
    );
}
