/* ================================================================
   NAWEEL GLOBAL â€” catalogue.js
   Handles: category filtering, live search, product modal,
            keyboard accessibility, URL state (hash)
================================================================ */

(function () {
  'use strict';

  /* â”€â”€ PRODUCT DATA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  var PRODUCTS = {
    'batik-fabric': {
      img:      'assets/images/products/batik_fabric.png',
      alt:      'Batik Hand-Drawn Fabric',
      category: 'Textiles',
      title:    'Batik Hand-Drawn Fabric',
      origin:   'Central Java, Indonesia',
      desc:     'Crafted using the traditional batik tulis (hand-drawn) method, each metre of this fabric takes between 10 to 14 days of meticulous work. Artisans in the Yogyakarta and Solo regions apply hot wax by hand using a canting tool before dyeing in natural indigo, terracotta, and soga-brown vats. No two pieces are identical â€” each carries the maker\'s rhythm in its lines.',
      tags:     ['Textile', 'Batik', 'Hand-Drawn', 'Natural Dye', 'UNESCO Heritage'],
      details:  [
        { label: 'Material',     value: '100% Cotton' },
        { label: 'Technique',   value: 'Batik Tulis (hand-drawn)' },
        { label: 'Origin',      value: 'Central Java' },
        { label: 'Min. Order',  value: '10 metres' },
        { label: 'Lead Time',   value: '3â€“6 weeks' },
        { label: 'Eco-Friendly', value: 'Natural dyes, no synthetics' },
      ],
    },
    'carved-wood': {
      img:      'assets/images/products/carved_wood.png',
      alt:      'Balinese Teak Sculpture',
      category: 'Woodwork',
      title:    'Balinese Teak Sculpture',
      origin:   'Ubud, Bali',
      desc:     'Hand-carved from sustainably sourced teak by master craftsmen in the artist village of Mas, Ubud. Each sculpture is unique â€” the carver works intuitively, reading the wood grain to determine the final form. Finished with a natural beeswax polish that deepens over time. A centrepiece that carries the spirit of Bali into any space.',
      tags:     ['Woodwork', 'Teak', 'Sculpture', 'Balinese Art', 'Handcarved'],
      details:  [
        { label: 'Material',     value: 'Teak Wood (FSC certified)' },
        { label: 'Technique',    value: 'Hand-carved & beeswax finished' },
        { label: 'Origin',       value: 'Mas Village, Bali' },
        { label: 'Min. Order',   value: '1 piece' },
        { label: 'Lead Time',    value: '2â€“4 weeks' },
        { label: 'Dimensions',   value: 'Custom available' },
      ],
    },
    'rattan-basket': {
      img:      'assets/images/products/rattan_basket.png',
      alt:      'Handwoven Rattan Basket',
      category: 'Weaving',
      title:    'Handwoven Rattan Basket',
      origin:   'East Kalimantan, Indonesia',
      desc:     'Woven tightly by Dayak artisans from natural rattan harvested from the rainforests of Kalimantan. The tight-weave technique creates a sturdy, water-resistant structure without any synthetic adhesive or treatment. Lightweight, 100% biodegradable, and built to last decades with proper care. Available in multiple sizes.',
      tags:     ['Rattan', 'Weaving', 'Natural', 'Eco-Friendly', 'Storage'],
      details:  [
        { label: 'Material',     value: 'Natural Rattan' },
        { label: 'Technique',    value: 'Tight-weave, hand-wound' },
        { label: 'Origin',       value: 'East Kalimantan' },
        { label: 'Min. Order',   value: '12 pieces' },
        { label: 'Lead Time',    value: '3â€“5 weeks' },
        { label: 'Sizes',        value: 'S / M / L â€” custom available' },
      ],
    },
    'embroidered': {
      img:      'assets/images/products/embroidered_textile.png',
      alt:      'Embroidered Silk Panel',
      category: 'Textiles',
      title:    'Embroidered Silk Panel',
      origin:   'West Sumatra, Indonesia',
      desc:     'Inspired by the ancient Songket weaving tradition of the Minangkabau people, these panels are hand-embroidered on pure silk using gold and forest-green thread. Dense floral motifs follow sacred geometric principles passed down through generations of female artisans in Pandai Sikek village. Each panel takes 3â€“5 weeks to complete.',
      tags:     ['Silk', 'Embroidery', 'Songket', 'Minangkabau', 'Gold Thread'],
      details:  [
        { label: 'Material',     value: 'Pure Silk + Gold Thread' },
        { label: 'Technique',    value: 'Hand-embroidery (Songket-inspired)' },
        { label: 'Origin',       value: 'Pandai Sikek, West Sumatra' },
        { label: 'Min. Order',   value: '5 panels' },
        { label: 'Lead Time',    value: '4â€“8 weeks' },
        { label: 'Use',          value: 'Wall dÃ©cor, garment, framing' },
      ],
    },
    'ceramics': {
      img:      'assets/images/products/ceramic_pottery.png',
      alt:      'Terracotta Pottery Set',
      category: 'Ceramics',
      title:    'Terracotta Pottery Set',
      origin:   'Lombok, Indonesia',
      desc:     'Wheel-thrown from local Lombok clay and hand-painted with traditional Sasak geometric motifs using mineral-based, non-toxic glazes in forest green and white. Fired in wood-burning kilns, creating subtle surface variations that make each piece unique. Food-safe, dishwasher safe, and microwave safe after final glaze firing.',
      tags:     ['Terracotta', 'Ceramic', 'Pottery', 'Sasak', 'Lombok', 'Food-Safe'],
      details:  [
        { label: 'Material',     value: 'Local Lombok Clay' },
        { label: 'Technique',    value: 'Wheel-thrown, wood-fired' },
        { label: 'Origin',       value: 'Lombok, NTB' },
        { label: 'Min. Order',   value: '6 sets' },
        { label: 'Lead Time',    value: '3â€“5 weeks' },
        { label: 'Set Includes', value: '3 vessels per set (S/M/L)' },
      ],
    },
    'silver': {
      img:      'assets/images/products/silver_jewelry.png',
      alt:      'Silver Filigree Jewellery Set',
      category: 'Jewellery',
      title:    'Silver Filigree Jewellery Set',
      origin:   'Kendari, Sulawesi',
      desc:     'Crafted by the Tolaki people of Southeast Sulawesi, Kendari filigree is recognised as one of Indonesia\'s finest silver arts. Thin silver wires are twisted and soldered by hand into intricate floral and geometric patterns with no mould â€” only the craftsman\'s trained eye and steady hand. Each set (bracelet + earrings) takes 2â€“3 days to complete.',
      tags:     ['Silver', 'Filigree', 'Jewellery', 'Tolaki', 'Sulawesi', 'Handmade'],
      details:  [
        { label: 'Material',     value: '925 Sterling Silver' },
        { label: 'Technique',    value: 'Hand-twisted filigree' },
        { label: 'Origin',       value: 'Kendari, SE Sulawesi' },
        { label: 'Min. Order',   value: '5 sets' },
        { label: 'Lead Time',    value: '2â€“4 weeks' },
        { label: 'Includes',     value: 'Bracelet + Earring pair' },
      ],
    },
    'wayang': {
      img:      'assets/images/products/wayang_puppet.png',
      alt:      'Wayang Kulit Shadow Puppet',
      category: 'Home DÃ©cor',
      title:    'Wayang Kulit Shadow Puppet',
      origin:   'Yogyakarta, Java',
      desc:     'Hand-cut from treated buffalo leather and painted with natural mineral pigments by a dalang\'s workshop in Yogyakarta. Each puppet depicts a character from the Ramayana or Mahabharata epic â€” a living piece of UNESCO Intangible Cultural Heritage. Ideal as a wall display, collector\'s piece, or a cultural gift for discerning buyers.',
      tags:     ['Wayang', 'Leather', 'UNESCO Heritage', 'Shadow Puppet', 'Wall Art', 'Collector'],
      details:  [
        { label: 'Material',     value: 'Buffalo Leather, Bamboo' },
        { label: 'Technique',    value: 'Hand-cut & natural pigment painted' },
        { label: 'Origin',       value: 'Yogyakarta, Java' },
        { label: 'Min. Order',   value: '1 piece' },
        { label: 'Lead Time',    value: '2â€“3 weeks' },
        { label: 'Height',       value: '50â€“80 cm (custom available)' },
      ],
    },
    'bamboo-lamp': {
      img:      'assets/images/products/bamboo_lamp.png',
      alt:      'Bamboo Weave Pendant Lamp',
      category: 'Home DÃ©cor',
      title:    'Bamboo Weave Pendant Lamp',
      origin:   'Tasikmalaya, West Java',
      desc:     'Woven by artisans in Tasikmalaya â€” Indonesia\'s bamboo craft capital â€” using locally sourced, smoke-treated bamboo strips for natural insect resistance. The diamond-lattice weave casts warm geometric shadow patterns when lit. Ships flat-packed for easy assembly. Accepts E27 / Edison-base bulbs. 100% natural and biodegradable.',
      tags:     ['Bamboo', 'Lamp', 'Home DÃ©cor', 'Eco-Friendly', 'Weaving', 'Lighting'],
      details:  [
        { label: 'Material',     value: 'Smoked Bamboo' },
        { label: 'Technique',    value: 'Diamond-lattice hand-weave' },
        { label: 'Origin',       value: 'Tasikmalaya, West Java' },
        { label: 'Min. Order',   value: '10 pieces' },
        { label: 'Lead Time',    value: '3â€“4 weeks' },
        { label: 'Fitting',      value: 'E27 (included), cord adjustable' },
      ],
    },
  };

  /* â”€â”€ ELEMENTS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  var grid       = document.getElementById('cat-grid');
  var cards      = Array.from(document.querySelectorAll('.cat-card'));
  var filters    = Array.from(document.querySelectorAll('.cat-filter'));
  var searchEl   = document.getElementById('cat-search');
  var clearBtn   = document.getElementById('cat-search-clear');
  var countNum   = document.getElementById('cat-count-num');
  var emptyState = document.getElementById('cat-empty');
  var emptyReset = document.getElementById('cat-empty-reset');

  var backdrop   = document.getElementById('modal-backdrop');
  var modalClose = document.getElementById('modal-close');

  var activeCat  = 'all';
  var activeQ    = '';

  /* â”€â”€ FILTER LOGIC â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  function applyFilters() {
    var q       = activeQ.toLowerCase().trim();
    var visible = 0;

    cards.forEach(function (card) {
      var cat  = card.dataset.cat;
      var name = (card.dataset.name || '').toLowerCase();
      var title = card.querySelector('.cat-card-title');
      var titleText = title ? title.textContent.toLowerCase() : '';

      var catMatch  = activeCat === 'all' || cat === activeCat;
      var textMatch = !q || name.indexOf(q) !== -1 || titleText.indexOf(q) !== -1;

      if (catMatch && textMatch) {
        card.classList.remove('cat-hidden');
        visible++;
      } else {
        card.classList.add('cat-hidden');
      }
    });

    // Update count
    countNum.textContent = visible;

    // Empty state
    if (visible === 0) {
      emptyState.removeAttribute('hidden');
    } else {
      emptyState.setAttribute('hidden', '');
    }
  }

  /* â”€â”€ CATEGORY PILLS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  filters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filters.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      activeCat = btn.dataset.cat;
      applyFilters();
    });
  });

  /* â”€â”€ SEARCH â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  searchEl.addEventListener('input', function () {
    activeQ = searchEl.value;
    clearBtn.hidden = !activeQ;
    applyFilters();
  });

  clearBtn.addEventListener('click', function () {
    searchEl.value = '';
    activeQ = '';
    clearBtn.hidden = true;
    searchEl.focus();
    applyFilters();
  });

  /* â”€â”€ EMPTY RESET â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  emptyReset.addEventListener('click', function () {
    searchEl.value = '';
    activeQ = '';
    clearBtn.hidden = true;
    activeCat = 'all';
    filters.forEach(function (b) {
      b.classList.toggle('active', b.dataset.cat === 'all');
    });
    applyFilters();
  });

  /* â”€â”€ MODAL OPEN â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  function openModal(id) {
    var data = PRODUCTS[id];
    if (!data) return;

    // Populate fields
    document.getElementById('modal-img').src      = data.img;
    document.getElementById('modal-img').alt      = data.alt;
    document.getElementById('modal-category').textContent   = data.category;
    document.getElementById('modal-title').textContent      = data.title;
    document.getElementById('modal-origin-text').textContent = data.origin;
    document.getElementById('modal-desc').textContent       = data.desc;

    // Tags
    var tagsEl = document.getElementById('modal-tags');
    tagsEl.innerHTML = '';
    (data.tags || []).forEach(function (t) {
      var span = document.createElement('span');
      span.className = 'modal-tag';
      span.textContent = t;
      tagsEl.appendChild(span);
    });

    // Details grid
    var detailsEl = document.getElementById('modal-details');
    detailsEl.innerHTML = '';
    (data.details || []).forEach(function (d) {
      var item = document.createElement('div');
      item.className = 'modal-detail-item';
      item.innerHTML =
        '<span class="modal-detail-label">' + d.label + '</span>' +
        '<span class="modal-detail-value">' + d.value + '</span>';
      detailsEl.appendChild(item);
    });

    // Enquire mailto
    var subject  = encodeURIComponent('Enquiry: ' + data.title + ' â€” Naweel Global');
    var body     = encodeURIComponent(
      'Hello Naweel Global,\n\nI am interested in enquiring about:\n\nProduct: ' + data.title +
      '\nOrigin: ' + data.origin +
      '\n\nPlease provide pricing and availability information.\n\nThank you.'
    );
    document.getElementById('modal-enquire-btn').href =
      'mailto:salesnaweel@gmail.com?subject=' + subject + '&body=' + body;

    // Show
    backdrop.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    backdrop.focus();
  }

  /* â”€â”€ MODAL CLOSE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  function closeModal() {
    backdrop.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);

  backdrop.addEventListener('click', function (e) {
    if (e.target === backdrop) closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !backdrop.hasAttribute('hidden')) {
      closeModal();
    }
  });

  /* â”€â”€ WIRE UP ALL MODAL TRIGGERS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  document.querySelectorAll('[data-modal]').forEach(function (el) {
    el.addEventListener('click', function () {
      openModal(el.dataset.modal);
    });
  });

  /* â”€â”€ SCROLL REVEAL (reuse from main.js pattern) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  var revealEls = document.querySelectorAll('.cat-card.reveal, .cat-cta-banner.reveal');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    revealEls.forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i % 4, 3) * 0.09 + 's';
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* â”€â”€ MOBILE NAV toggle (already handled by main.js) â”€â”€â”€â”€â”€â”€â”€â”€ */
  /* The nav in catalogue.html loads main.js which handles    */
  /* #nav-toggle, scrolled state, etc. â€” no duplication needed */

  /* â”€â”€ INIT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  applyFilters();

})();
