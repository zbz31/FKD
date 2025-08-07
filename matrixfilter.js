 function matrixfilter(conditunit) {
    if (conditunit === undefined) {
      return
    }
    // --- Category: Capital Filters ---
    if (conditunit.startsWith("capi_")) return handleCapi(conditunit);
    if (conditunit.startsWith("capinot_")) return handleCapinot(conditunit);

    // --- Category: Region Filters ---
    if (conditunit.startsWith("regi__")) return handleRegi(conditunit);
    if (conditunit.startsWith("regi1__")) return handleRegi1(conditunit);
    if (conditunit.startsWith("rgn_")) return handleRgn(conditunit);
    if (conditunit.startsWith("ExtraNahRegion_")) return handleExtraNahRegion(conditunit);

    // --- Category: Extra Tag Filters ---
    if (conditunit.startsWith("Extra_")) return handleExtra(conditunit);
    if (conditunit.startsWith("ExtraNah_OnlyBa, Center")) return handleExtraNahOnlyBaCenter(conditunit);
    if (conditunit.startsWith("ExtraNo_")) return handleExtraNo(conditunit);
    if (conditunit.startsWith("ExtraNah_")) return handleExtraNah(conditunit);

    // --- Category: Historical / Naval ---
    if (conditunit.includes("histor")) return handleHistorical();
    if (conditunit.startsWith("year")) return handleYear(conditunit);
    if (conditunit.includes("Naval")) return handleNaval();

    // --- Category: Name-Based Filters ---
    if (conditunit.startsWith("end_")) return handleNameEndsWith(conditunit);
    if (conditunit.startsWith("namenot_")) return handleNameNot(conditunit);
    if (conditunit.startsWith("with_")) return handleNameWith(conditunit);
    if (conditunit.startsWith("namehas_")) return handleNameHasSpecial(conditunit);
    if (conditunit === "finishct") return handleFinishConsonant();
    if (conditunit === "finishvw") return handleFinishVowel();
    if (conditunit === "alphabetic") return handleAlphabetic();
    if (conditunit.startsWith("lets")) return handleLetterName(conditunit);
    if (conditunit.startsWith("start")) return handleStartName(conditunit);
    if (conditunit === "exact2") return handleExact2();
    if (conditunit === "words2") return handleWords2();
    if (conditunit === "words3") return handleWords3();
    // --- Category: Cross Style ---
    if (conditunit === "smallcross") return handleSmallCross();
    if (conditunit === "largecross") return handleLargeCross();

    // --- Category: Directional Bands ---
    if (conditunit === "diffdirection") return handleDifferentDirection();
    if (conditunit === "samedirection") return handleSameDirection();

    if (conditunit === "allver") return handleAllVertical();
    if (conditunit === "allhor") return handleAllHorizontal();
    if (conditunit === "alldia") return handleAllDiagonal();

    // --- Category: Uniqueness in Names ---
    if (conditunit === "unique") return handleUnique();
    if (conditunit === "retrique") return handleRetrique();
    if (conditunit === "repique") return handleRepique();
    if (conditunit === "begique") return handleBegique();

    // --- Category: Color Bands ---
    if (conditunit === "firstlast") return handleFirstLast();
    if (conditunit === "lastfirst") return handleLastFirst();
    if (conditunit === "notband_blue") return handleNotBandBlue();
    if (conditunit === "notband_YEL") return handleNotBandYEL();
    if (conditunit === "notband_GRE") return handleNotBandGRE();

    // --- Category: Featured Items ---
    if (conditunit.startsWith("featured_")) return handleFeatured(conditunit);

    // --- Category: EU Exclusion ---
    if (conditunit === "noeuni") return handleNoEU();

    // --- Category: Stats & Cards ---
    if (conditunit.startsWith("pct_")) return handlePct(conditunit);
    if (conditunit.startsWith("atk_")) return handleAtk(conditunit);
    if (conditunit.startsWith("namae_")) return handleNamae(conditunit);

    // --- Category: Color Composition ---
    if (conditunit.startsWith("cl_")) return handleColorFilter(conditunit);
    if (conditunit.startsWith("NO_")) return handleNoColorFilter(conditunit);
    if (conditunit === "WHRENO") return (() => { const s = new Set(handleNoColorFilter("NO_WHI").map(f => f.couname)); return handleNoColorFilter("NO_RED").filter(f => s.has(f.couname)); })();
    if (conditunit === "WHGRNO") return (() => { const s = new Set(handleNoColorFilter("NO_WHI").map(f => f.couname)); return handleNoColorFilter("NO_GRE").filter(f => s.has(f.couname)); })();
    if (conditunit === "WHYENO") return (() => { const s = new Set(handleNoColorFilter("NO_WHI").map(f => f.couname)); return handleNoColorFilter("NO_YEL").filter(f => s.has(f.couname)); })();
    if (conditunit === "BAWHNO") return (() => { const s = new Set(handleNoColorFilter("NO_WHI").map(f => f.couname)); return handleNoColorFilter("NO_BLA").filter(f => s.has(f.couname)); })();
    if (conditunit === "BLWHNO") return (() => { const s = new Set(handleNoColorFilter("NO_WHI").map(f => f.couname)); return handleNoColorFilter("NO_BLU").filter(f => s.has(f.couname)); })();
    if (conditunit === "BLRENO") return (() => { const s = new Set(handleNoColorFilter("NO_RED").map(f => f.couname)); return handleNoColorFilter("NO_BLU").filter(f => s.has(f.couname)); })();
    if (conditunit === "LUEDHI") return handleTotalColor(["cl_BLU", "cl_RED", "cl_WHI"]);
    if (conditunit === "LUREEL") return handleTotalColor(["cl_BLU", "cl_RED", "cl_YEL"]);
    if (conditunit === "LUELHI") return handleTotalColor(["cl_BLU", "cl_YEL", "cl_WHI"]);
    if (conditunit === "LAEDHI") return handleTotalColor(["cl_BLA", "cl_RED", "cl_WHI"]);
    if (conditunit === "REEDHI") return handleTotalColor(["cl_GRE", "cl_RED", "cl_WHI"]);
    if (conditunit === "REEDEL") return handleTotalColor(["cl_GRE", "cl_RED", "cl_YEL"]);
    if (conditunit === "BLAWHI") return handleTotalColor(["cl_BLA", "cl_WHI"]);
    if (conditunit === "BLUWHI") return handleTotalColor(["cl_BLU", "cl_WHI"]);
    if (conditunit === "BLUYEL") return handleTotalColor(["cl_BLU", "cl_YEL"]);
    if (conditunit === "GRERED") return handleTotalColor(["cl_GRE", "cl_RED"]);
    if (conditunit === "GREYEL") return handleTotalColor(["cl_GRE", "cl_YEL"]);
    if (conditunit === "REDWHI") return handleTotalColor(["cl_RED", "cl_WHI"]);
    if (conditunit === "REDYEL") return handleTotalColor(["cl_RED", "cl_YEL"]);
    if (conditunit === "YELWHI") return handleTotalColor(["cl_YEL", "cl_WHI"]);
    if (conditunit === "2Color") return handleColorLength(2);
    if (conditunit === "3Color") return handleColorLength(3);
    if (conditunit === "4Color") return handleColorLength(4);
    if (conditunit === "5+Colo") return handleColorLength(5);

    //////////////////////////// --- Capital Filters ---
    function handleCapi(conditunit) {
      const target = conditunit.replace("capi_", "").toLowerCase();
      const normTarget = target.normalize("NFD").replace(/[̀-ͯ]/g, "");
      return flags.filter(f =>
        f.Items.some(item =>
          item.startsWith("capi_") &&
          item.replace("capi_", "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").includes(normTarget)
        )
      );
    }

    function handleCapinot(conditunit) {
      const target = conditunit.replace("capinot_", "").toLowerCase();
      return flags.filter(f =>
        f.Items.some(item =>
          item.startsWith("capi_") &&
          !item.replace("capi_", "").toLowerCase().includes(target)
        )
      );
    }

    ////////////////////////////////////// --- Region Filters ---
    function handleRegi() {
      return flags.filter(f => f.couname.toLowerCase().includes('['));
    }

    function handleRegi1(conditunit) {
      const region = "[" + conditunit.replace("regi1__", "").toLowerCase() + "]";
      return flags.filter(f => f.couname.toLowerCase().includes(region));
    }

    function handleRgn(conditunit) {
      const region = conditunit.replace("rgn_", "").toLowerCase();
      return flags.filter(f => f.region.toLowerCase().includes(region));
    }

    function handleExtraNahRegion(conditunit) {
      const [r1, r2] = conditunit.replace("ExtraNahRegion_", "").split(", ");
      return flags.filter(f => !f.region.includes(r1) && !f.region.includes(r2));
    }


    ////////////////////////////////// --- Extra Tag Filters ---
    function handleExtra(conditunit) {
      const [t1, t2] = conditunit.replace("Extra_", "").split(", ");
      const set2 = new Set(matrixfilter(t2).map(f => f.couname));
      return matrixfilter(t1).filter(f => set2.has(f.couname));
    }

    function handleExtraNo(conditunit) {
      const [t1, t2] = conditunit.replace("ExtraNo_", "").split(", ");
      const excludeSet = new Set(matrixfilter(t2).map(f => f.couname));
      return matrixfilter(t1).filter(f => !excludeSet.has(f.couname));
    }


    function handleExtraNahOnlyBaCenter() {
      return flags.filter(f => {
        const items = f.Items;
        const hasOnlyBa = items.includes("OnlyBa");
        const hasCrosse = items.includes("Crosse");
        const hasCenter = items.includes("Center");

        if (hasOnlyBa && hasCrosse && !hasCenter) {
          return true;
        }

        if (hasOnlyBa && !hasCrosse && !hasCenter) {
          return false;
        }

        if (!hasOnlyBa && !hasCrosse && !hasCenter) {
          return true;
        }
        if (hasCenter) {
          return false;
        }
        return true;
      });
    }

    function handleExtraNah(conditunit) {
      const [t1, t2] = conditunit.replace("ExtraNah_", "").split(", ");
      const unionSet = new Set([...matrixfilter(t1), ...matrixfilter(t2)].map(f => f.couname));
      return flags.filter(f => !unionSet.has(f.couname));
    }



    /////////////////////////// --- Historical / Naval ---
    function handleHistorical() {
      return flags.filter(f => f.type.toLowerCase().includes("historical") || f.couname.includes("Afghanistan ("));
    }

    function handleYear(conditunit) {
      return flags.filter(f => {
        const years = f.year.split(',').map(y => parseInt(y.trim(), 10));

        if (conditunit === "year00") {
          return years.some(y => y >= 2000 && y <= 3000);
        }

        if (conditunit === "year19") {
          return years.some(y => y >= 1900 && y <= 1999);
        }

        if (conditunit === "year18") {
          return years.some(y => y >= 1800 && y <= 1899);
        }

        // fallback: exclude if it doesn't match any known filter
        return false;
      });
    }


    function handleNaval() {
      return flags.filter(f => f.type.toLowerCase().includes("naval"));
    }

    // --- Name-Based Filters ---
    function handleNameEndsWith(conditunit) {
      const endText = conditunit.replace("end_", "").toLowerCase();
      return flags.filter(f => f.couname.replace(/\(.*\)/, "").trim().toLowerCase().endsWith(endText));
    }

    function handleNameNot(conditunit) {
      const text = conditunit.replace("namenot_", "").toLowerCase();
      return flags.filter(f => !f.couname.replace(/\(.*\)/, "").replace(/\[.*\]/, "").toLowerCase().includes(text));
    }

    function handleNameWith(conditunit) {
      const text = conditunit.replace("with_", "").toLowerCase();
      return flags.filter(f => f.couname.replace(/\(.*\)/, "").replace(/\[.*\]/, "").toLowerCase().includes(text));
    }

    function handleNameHasSpecial(conditunit) {
      const symbol = conditunit.replace("namehas_", "");
      return flags.filter(f => f.couname.includes(symbol));
    }

    function handleFinishConsonant() {
      return flags.filter(f => /[bcdfghjklmnpqrstvwxyz]$/i.test(f.couname.replace(/\(.*\)/, "").replace(/\[.*\]/, "")));
    }

    function handleFinishVowel() {
      return flags.filter(f => /[aeiou]$/i.test(f.couname.replace(/\(.*\)/, "").replace(/\[.*\]/, "")));
    }

    function handleAlphabetic() {
      return flags.filter(f => {
        const name = f.couname
          .replace(/\(.*?\)/g, "")  // Eliminar paréntesis
          .replace(/\[.*?\]/g, "")  // Eliminar corchetes
          .replace(/[^a-z]/gi, "")  // Solo letras
          .toLowerCase();

        const consonants = name.replace(/[aeiou]/g, "");  // Eliminar vocales
        const sorted = consonants.split("").sort().join("");
        return consonants === sorted;
      });
    }
    function handleLetterName(conditunit) {
      const expectedLength = parseInt(conditunit.match(/\d+$/)[0], 10);

      return flags.filter(f => {
        let cleaned = f.couname
          .replace(/\(.*?\)/g, '')  // Remove ( ... )
          .replace(/\[.*?\]/g, '')  // Remove [ ... ]
          .replace(/\s/g, '');      // Remove all spaces

        const letterCount = cleaned.length;
        return letterCount === expectedLength;
      });
    }

    function handleStartName(conditunit) {
      const targetLetter = conditunit.slice(-1).toUpperCase(); // Get last char and ensure uppercase

      return flags.filter(f => {
        let cleaned = f.couname
          .replace(/\(.*?\)/g, '')  // Remove ( ... )
          .replace(/\[.*?\]/g, '')  // Remove [ ... ]
          .replace(/\s/g, '');      // Remove all spaces

        return cleaned.charAt(0).toUpperCase() === targetLetter;
      });
    }

    function handleExact2() {
      return flags.filter(f => {
        let cleaned = f.couname
          .replace(/\(.*?\)/g, '')   // Remove ( ... )
          .replace(/\[.*?\]/g, '')   // Remove [ ... ]
          .trim();                   // Remove leading/trailing spaces

        const words = cleaned.split(/[\s\-]+/); // Split by spaces or hyphens

        return words.length === 2;
      });
    }

    function handleWords2() {
      return flags.filter(f => {
        let cleaned = f.couname
          .replace(/\(.*?\)/g, '')   // Remove ( ... )
          .replace(/\[.*?\]/g, '')   // Remove [ ... ]
          .trim();                   // Remove leading/trailing spaces

        const words = cleaned.split(/[\s\-]+/); // Split by spaces or hyphens

        return words.length >= 2;
      });
    }

    function handleWords3() {
      return flags.filter(f => {
        let cleaned = f.couname
          .replace(/\(.*?\)/g, '')   // Remove ( ... )
          .replace(/\[.*?\]/g, '')   // Remove [ ... ]
          .trim();                   // Remove leading/trailing spaces

        const words = cleaned.split(/[\s\-]+/); // Split by spaces or hyphens

        return words.length >= 3;
      });
    }
    // --- Cross Style ---
    function handleSmallCross() {
      const largeCrosse = new Set(matrixfilter("largecross").map(f => f.couname));

      const exceptions = new Set([
        "Guernsey",
        "Añasco",
        "Adjuntas",
        "Georgia",
        "Nelson",
        "[USA] Prince George's County",
        "[TON] Tonga (Naval Ensign)",
        "[UKR] Volyn Oblast",
        "[GIB] Diocese of Gibraltar in Europe"
      ]);

      return flags.filter(f =>
        f.Items.includes("Crosse") &&

        (
          (!largeCrosse.has(f.couname)) ||
          [...exceptions].some(name => f.couname.includes(name))
        )
      );
    }

    function handleLargeCross() {
      const allhorSet = new Set(matrixfilter("allhor").map(f => f.couname));
      const allverSet = new Set(matrixfilter("allver").map(f => f.couname));
      const excludedNames = [
        "Añasco",
        "skie Voivodeship",
        "South Sea Islanders",
        "Adjuntas",
        "Galicia",
        "Aguada",
        "Nelson"
      ];

      return flags.filter(f =>
        f.Items.includes("Crosse") &&
        !f.Items.includes("NoBand") &&
        !allhorSet.has(f.couname) &&
        !allverSet.has(f.couname) &&
        !excludedNames.some(name => f.couname.includes(name))
      );
    }

    // --- Directional Bands ---
    function handleDifferentDirection() {
      const excluded = new Set([
        ...matrixfilter("allhor"),
        ...matrixfilter("allver"),
        ...matrixfilter("alldia")
      ].map(f => f.couname));

      return flags.filter(f =>
        !excluded.has(f.couname) &&
        !f.Items.includes("NoBand")
      );
    }

    function handleSameDirection() {
      const sets = new Set([
        ...matrixfilter("allhor"),
        ...matrixfilter("allver"),
        ...matrixfilter("alldia")
      ].map(f => f.couname));

      return flags.filter(f => sets.has(f.couname));
    }

    function handleAllVertical() {
      const banned = new Set(["dgband", "Horizo", "NoBand"]);
      return flags.filter(f => !f.Items.some(item => banned.has(item)));
    }
    function handleAllHorizontal() {
      const banned = new Set(["dgband", "Vertic", "NoBand"]);
      return flags.filter(f => !f.Items.some(item => banned.has(item)));
    }
    function handleAllDiagonal() {
      const banned = new Set(["Horizo", "Vertic", "NoBand"]);
      return flags.filter(f => !f.Items.some(item => banned.has(item)));
    }

    // --- Uniqueness ---
    function handleUnique() {
      return flags.filter(f => {
        const name = f.couname.replace(/\(.*\)/g, "").replace(/\[.*\]/g, "").replace(/\s+/g, "").toLowerCase();
        return name.length === new Set(name).size;
      });
    }

    function handleRetrique() {
      return flags.filter(f => {
        const name = f.couname.replace(/\(.*\)/g, "").replace(/\[.*\]/g, "").toLowerCase();
        const count = {};
        for (let c of name) {
          if (/[a-z]/.test(c)) {
            count[c] = (count[c] || 0) + 1;
            if (count[c] >= 3) return true;
          }
        }
        return false;
      });
    }

    function handleBegique() {
      return flags.filter(f => {
        let name = f.couname
          .replace(/\(.*?\)/g, "")      // Quitar contenido entre paréntesis
          .replace(/\[.*?\]/g, "")      // Quitar contenido entre corchetes
          .replace(/\s+/g, "")          // Quitar espacios
          .toLowerCase();               // Pasar a minúsculas

        return name.length > 0 && name[0] === name[name.length - 1];
      });
    }

    function handleRepique() {
      return flags.filter(f => {
        const name = f.couname.replace(/\(.*\)/, "").replace(/\[.*\]/, "").toLowerCase();
        return name.length !== new Set(name).size;
      });
    }


    // --- Band Code Matching ---
    function handleFirstLast() {
      const colors = ["GRE", "YEL", "RED", "WHI", "BLU", "BLA", "ORA"];
      return flags.filter(f =>
        colors.some(color => f.Items.map(i => i.toLowerCase()).includes(`001${color}`.toLowerCase()) && f.Items.map(i => i.toLowerCase()).includes(`003${color}`.toLowerCase()))
      );
    }

    function handleLastFirst() {
      const colors = ["GRE", "YEL", "RED", "WHI", "BLU", "BLA", "ORA"];
      return flags.filter(f => {
        const items = f.Items.map(i => i.toLowerCase());
        const hasSuper = colors.some(c => items.includes(`001${c}`.toLowerCase()) || items.includes(`003${c}`.toLowerCase()));
        const allGood = colors.every(c => !(items.includes(`001${c}`.toLowerCase()) && items.includes(`003${c}`.toLowerCase())));
        return hasSuper && allGood;
      });
    }

    function handleNotBandColor(colorCode) {
      return flags.filter(f => {
        const items = f.Items.map(i => i.toLowerCase());
        return !["001", "002", "003"].some(n => items.includes(`${n}${colorCode}`.toLowerCase())) &&
          f.Colors.includes(`cl_${colorCode}`) &&
          (colorCode !== "GRE" || !f.Items.includes("NoBand"));
      });
    }

    // --- Featured Item ---
    function handleFeatured(conditunit) {
      const target = conditunit.replace("featured_", "");
      const blacklist =
        ["Plants",
          "IsMoon",
          "1Stars",
          "2Stars",
          "3+Star",
          "HasSun",
          "Animal",
          "Texted",
          "Geogrh",
          "Crosse",
          "Weapon",
          "Humans",
          "OnlyBa",
          "Wavess",
          "Waters",
          "Ships!",
          "Crowns",
          "Builds",
          "Nordic",
          "Trside"];
      return flags.filter(f =>
        f.Items.includes(target) && !f.Items.some(i => blacklist.filter(b => b !== target).includes(i))
      );
    }

    // --- EU Filter ---
    function handleNoEU() {
      return flags.filter(f => !f.Items.includes("eunion") && f.region.includes("Europe") && !f.couname.includes("["));
    }

    // --- Stats & Cards ---
    function handlePct(conditunit) {
      const [_, statType, range] = conditunit.split('_');
      const [min, max] = range.split('-').map(Number);
      return flags.filter(p => {
        if (p.couname.includes("[")) return false;
        const stat = p.ptg.find(t => typeof t === "string" && t.includes(statType));
        if (!stat) return false;
        const val = Number(stat.replace(`pct${statType}_`, ""));
        return !isNaN(val) && val >= min && val <= max;
      });
    }

    function handleAtk(conditunit) {
      const [min, max] = conditunit.replace("atk_", "").split('-').map(Number);
      return cards.filter(c => c.atkval >= min && c.atkval <= max);
    }

    function handleNamae(conditunit) {
      const query = conditunit.replace("namae_", "").toLowerCase();
      return cards.filter(c => c.couname.toLowerCase().includes(query));
    }

    // --- Color Filter ---
    function handleColorFilter(conditunit) {
      const colors = conditunit.split(", ");
      return flags.filter(f => colors.every(c => f.Colors.join(',').includes(c)));
    }

    function handleNoColorFilter(conditunit) {

      return flags.filter(f => !f.Colors.join(',').includes(conditunit.replace("NO_", "")));
    }

    return flags.filter(flagpick =>
      flagpick.Items && flagpick.Items.some(item => item.toLowerCase().includes(conditunit.toLowerCase()))
    );
  }
