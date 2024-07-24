'use client'

import { useState } from 'react'
import Image from "next/image";
import styles from "../styles/page.module.scss";
import statusStyle from '../styles/status.module.css'
import post from '../styles/post.module.css';
import Link from 'next/link'

export default function Home() {
    const [state, setState] = useState('status')
    const [post, setPost] = useState(false)
    const [pagenation, setPagenation] = useState(0)

    return (
        <>
            {post === true &&
                <>
                    {pagenation === 0 && <img src="/img/monitor.png" alt="" className={styles.img} onClick={() => { setPagenation(1) }} />}
                    {pagenation === 1 && <img src="/img/monitor2.png" alt="" className={styles.img} onClick={() => { setPagenation(2) }} />}
                    {pagenation === 2 && <img src="/img/monitor3.png" alt="" className={styles.img} onClick={() => { setPagenation(0) }} />}
                </>}
            {post === false &&
                <>
                    <div className={styles.header}>
                        <button className={styles.prev} onClick={() => {
                            setPost(true)
                        }}>＜</button>
                        <div className={styles.profileWrap}>
                            <div className={styles.icon}></div>
                            <div className={styles.profileTextWrap}>
                                <h3 className={styles.userName}>諏訪内有人</h3>
                                <span className={styles.smokeInformation}>
                                    <span className={styles.quitSmoke}>禁煙歴:2ヶ月</span>
                                    <span className={styles.bland}>銘柄: hi-lite</span>
                                </span>
                                <p className={styles.profileText}>禁煙を頑張るしがない社会人です。</p>
                                <span className={styles.location}>兵庫・豊岡</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.nav}>
                        <ul>
                            <li><button className={state === 'status' ? styles.link : ''} onClick={() => setState('status')}>ステータス</button></li>
                            <li><button className={state === 'media' ? styles.link : ''} onClick={() => setState('media')}>メディア</button></li>
                            <li><button className={state === 'post' ? styles.link : ''} onClick={() => setState('post')}>投稿</button></li>
                            <li><button className={state === 'good' ? styles.link : ''} onClick={() => setState('good')}>いいね</button></li>
                        </ul>
                    </div>

                    <div>
                        {state === 'status' && <UserProgress />}
                        {state === 'post' && <Post />}
                    </div>
                </>
            }
        </>
    )
}

function UserProgress() {
    const username = "諏訪内 有人";
    const status = "禁煙初級";
    const totalDays = 69; // 2ヶ月と9日
    const loggedInDays = 55;
    const quitCigarettes = 345;
    const savedMoney = 8970;
    const progressPercentage = 65;
    const likes = 95;

    return (
        <div className={statusStyle.container}>
            <div className={statusStyle.header}>
                <div>
                    <span className={statusStyle.username}>{username}</span>
                    <span className={statusStyle.status}>{status}</span>
                </div>
                <span className={statusStyle.likes}>❤️ {likes}</span>
            </div>
            <div className={statusStyle.message}>
                ログインありがとうございます、{username}さん現在禁煙<span style={{ color: '#1093DC', fontWeight: 'bold' }}>{Math.floor(totalDays / 30)}ヶ月と{totalDays % 30}日</span>です。今が頑張り時です！
            </div>
            <div className={statusStyle.progressContainer}>
                <div className={statusStyle.progress}>
                    <span className={statusStyle.progressLabel}>ログイン日数の割合</span>
                    <div className={statusStyle.progressBar}>
                        <div className={statusStyle.progressBarFill} style={{ width: `${(loggedInDays / totalDays) * 100}%` }}>
                            <span className={statusStyle.progressText}>{((loggedInDays / totalDays) * 100).toFixed(0)}%（{loggedInDays}日）</span>
                        </div>
                    </div>
                </div>
                <div className={statusStyle.progress}>
                    <span className={statusStyle.progressLabel}>禁煙した本数</span>
                    <div className={statusStyle.progressBar}>
                        <div className={statusStyle.progressBarFill} style={{ width: '100%' }}>
                            <span className={statusStyle.progressText}>{quitCigarettes}本</span>
                        </div>
                    </div>
                </div>
                <div className={statusStyle.progress}>
                    <span className={statusStyle.progressLabel}>節約した金額</span>
                    <div className={statusStyle.progressBar}>
                        <div className={statusStyle.progressBarFill} style={{ width: '100%' }}>
                            <span className={statusStyle.progressText}>{savedMoney}円</span>
                        </div>
                    </div>
                </div>
                <div className={statusStyle.progress}>
                    <span className={statusStyle.progressLabel}>成長度</span>
                    <div className={statusStyle.progressBar}>
                        <div className={statusStyle.progressBarFill} style={{ width: `${progressPercentage}%` }}>
                            <span className={statusStyle.progressText}>{progressPercentage}%</span>
                        </div>
                    </div>
                    <div className={statusStyle.progressLevels}>
                        <span className={statusStyle.levelInitial}>禁煙初級</span>
                        <span className={statusStyle.levelIntermediate}>禁煙中級</span>
                    </div>
                </div>
            </div>
        </div>
    );
};


function Post() {
    return (
        <div className={post.container}>
            <div className={post.header}>
                <div className={post.avatar} />
                <div className={post.userInfo}>
                    <div className={post.username}>諏訪内 有人</div>
                    <div className={post.date}>2024/5/20 • 12:23 PM</div>
                </div>
                <div className={post.pin}>📌</div>
            </div>
            <div className={post.content}>
                子供が生まれたのをきっかけに学生時代から続けていたタバコをやめようと思い、始めてみました。<br />
                家族のため、そして食べることが大好きな自分のためにも禁煙を頑張ってみようと思いますので、皆さんどうぞよろしくお願いいたしますm(_ _)m
            </div>
            <div className={post.image}>
                <img src="https://img.benesse-cms.jp/tamahiyo/item/image/normal/3772d06a-76cf-4a2c-aa01-9b308161ef23.jpg?w=1396&h=932&resize_type=cover&resize_mode=force" alt="Baby" />
            </div>
            <div className={post.actions}>
                <div className={post.action}>
                    <span>↩️</span>
                </div>
                <div className={post.action}>
                    <span>👍</span> <span>21</span>
                </div>
            </div>
        </div>
    )
}