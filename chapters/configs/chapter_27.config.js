        const chapterConfig = {
            chapterNumber: 27, // 当前章节号
            chapterTitle: "闪耀的蛙1", // 章节标题
            imageUrls: [ // 图片URL数组
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326077/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_1_itwf82.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326103/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_2_lrclyc.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326077/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_4_zxajwu.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326085/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_5_pn66lm.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326080/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_6_nfik7x.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326087/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_7_fppiho.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326089/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_8_dzxal2.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326082/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_9_vba7mm.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326092/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_10_jn7tfv.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326086/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_12_mlci1r.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326090/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_13_uptsld.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326090/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_14_wnnbtg.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326096/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_15_zupqic.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326099/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_16_ltlmz5.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326096/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_17_i7hy6n.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326101/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_18_xzxheg.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326098/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_19_bmfvcd.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326108/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_20_wjmudr.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326101/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_21_qkfadc.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326104/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_22_uvopmw.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326104/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_23_qhw6d1.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326109/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_24_snggca.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326113/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_25_wmq1il.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326122/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_26_apeb5j.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326301/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_27_r86uyz.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326330/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_28_pbg5yx.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326305/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_30_scxyx4.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326308/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_31_gt6dh6.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326308/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_32_baunme.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326308/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_33_mlsrr4.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326311/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_34_cyo45q.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326310/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_35_wphjd0.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326314/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_36_ngprpj.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326320/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_37_txgnkd.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326315/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_38_bhgpbl.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326323/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_39_njflew.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326323/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_40_q84saf.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326334/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_42_bmkl3v.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326327/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_43_vcxwhc.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326329/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_44_zgmd4d.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326329/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_45_sz135j.png",
            "https://res.cloudinary.com/dayfb4276/image/upload/v1752326337/%E9%B9%AB%E5%B7%A2%E5%A4%96%E4%BC%A027_46_ymewv6.png",

        ],
            staffMembers: [ // 制作人员
                { role: "图源", name: "lilocat" },
                { role: "文字识别，修图", name: "BalloonsTranslator，Deco" },
                { role: "翻译", name: "deepseek，Deco" },
                { role: "嵌字", name: "Deco" },
                { role: "校对", name: "Deco" },
                { role: "网页制作", name: "deepseek，Deco" }
            ],
            talkContent: `
                <p>原以为隼宝儿是共生的二号人物呢，结果他好像只是在帮鹫巢大人干黑活而已，在公司里都不熟</p>
                <p>小柴好可爱，只是个反派好可惜</p>
            `
        };