'use client'

import { useState } from 'react'
import Image from "next/image";
import styles from "../styles/page.module.scss";
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.icon}></div>
                <div className={styles.profileText}>
                    <p>諏訪内有人</p>
                </div>
            </div>

            <div className={styles.nav}>
                <ul>
                    <li><a href="">ステータス</a></li>
                    <li><a href="">メディア</a></li>
                    <li><a href="">投稿</a></li>
                    <li><a href="">いいね</a></li>
                </ul>
            </div>

            <div className={styles.status}>
            
            </div>
        </>
    )
}
