/* Career map for the About page: Leaflet, one marker per place.
   Runs on every page load, including Material's instant navigation. */
(function () {
  var PLACES = [
    // ---- Now ----
    { id: "swh", type: "now", lat: 48.8264, lng: 2.3460, when: "Sep 2025 to now",
      title: "Partnerships Specialist and OSPO-RADAR Assistance", org: "Software Heritage (Fondation Inria), Paris",
      text: "Partnerships from first contact to production, agreements, metadata quality checks and OSPO-RADAR. Training and talks on citing and preserving research code with SWHID and CodeMeta." },
    { id: "fontainebleau", type: "now", lat: 48.4047, lng: 2.7016, when: "Home",
      title: "Fontainebleau", org: "Seine-et-Marne, France",
      text: "Where I live. Member of the Jardins familiaux de Fontainebleau-Avon; nature walks in the forest." },
    { id: "coa", type: "experience", lat: 40.93, lng: -7.07, when: "Feb 2026 to now",
      title: "Researcher, Rewilding Academic Talent Program", org: "Rewilding Portugal, Greater Côa Valley",
      text: "Landscape-connectivity research: resistance-surface modelling and multispecies corridor design. Field illustration after the valley's Iron Age engravings." },

    // ---- Volunteering and mentoring ----
    { id: "niger", type: "volunteer", lat: 13.51, lng: 2.11, when: "Sep to Dec 2025",
      title: "Satellite-data mentor", org: "Innovate with EU Space Data (remote)",
      text: "Consultations on satellite data and GIS with entrepreneurs in Niger." },
    { id: "jamaica", type: "volunteer", lat: 18.0, lng: -76.79, when: "Sep to Dec 2025",
      title: "Satellite-data mentor", org: "Innovate with EU Space Data (remote)",
      text: "Consultations on satellite data and GIS with entrepreneurs in Jamaica." },
    { id: "aren", type: "volunteer", lat: -1.29, lng: 36.82, when: "2026",
      title: "Trainer, Local Network Leads programme", org: "African Reproducibility Network (remote)",
      text: "Trainer for Levels 1 and 2 of AREN's 2026 volunteer-run programme for local reproducibility network leads across Africa. Pin placed in East Africa for the network as a whole." },

    // ---- Experience in France ----
    { id: "inrae", type: "experience", lat: 48.8570, lng: 2.3137, when: "Sep 2024 to Aug 2025",
      title: "Project Officer, Data Management and International Relations", org: "INRAE, Paris",
      text: "Logistics, documentation and institutional relations for 12 international delegation visits; PostgreSQL/QGIS decision-support work and FAIR, GDPR-compliant databases." },
    { id: "ecl", type: "experience", lat: 45.7834, lng: 4.7667, when: "Mar to Aug 2024",
      title: "Chargée de mission données de la recherche", org: "École centrale de Lyon, Écully",
      text: "FAIR data governance with researchers; administration of the institutional Recherche Data Gouv space; open-science training." },
    { id: "mnhn", type: "experience", lat: 48.8439, lng: 2.3594, when: "Oct 2022 to Feb 2024",
      title: "Database Administrator (Application Developer)", org: "Muséum national d'Histoire naturelle, Paris",
      text: "Updated the database and website of Transloc, the platform for conservation translocations in the Western Palearctic (Biodiversa+, Water JPI), working with partners in more than ten EU countries. Before that, an information system for historical opium-poppy dispersal data." },
    { id: "grdf", type: "experience", lat: 48.5745, lng: 2.5830, when: "Jan to Sep 2022",
      title: "GIS Database Technician", org: "GRDF, Savigny-le-Temple",
      text: "Turned manual route creation into a repeatable geographic workflow; cartographic quality checks on the gas network." },
    { id: "metropolitan", type: "experience", lat: 48.8397, lng: 2.2399, when: "2011 to 2020",
      title: "Business English teacher", org: "Metropolitan Langues & Aptitudes, Boulogne-Billancourt",
      text: "Adult learners, CEFR certification preparation." },
    { id: "insead", type: "experience", lat: 48.4049, lng: 2.6826, when: "2006 to 2008",
      title: "Research Assistant", org: "INSEAD, Fontainebleau",
      text: "Interviews on corporate social responsibility in the EU FP6 RESPONSE project, to study cognition in environmental economics." },

    // ---- Experience in South Africa ----
    { id: "palabora", type: "experience", lat: -24.008, lng: 31.13, when: "1997 to 2002",
      title: "Environmental Deputy Director", org: "Department of Minerals and Energy, South Africa",
      text: "Oversaw the environmental side of the Palabora copper mine at Phalaborwa, on the edge of Kruger National Park: post-mining land restoration and catchment management." },
    { id: "bushveld", type: "experience", lat: -25.667, lng: 27.242, when: "1997 to 2002",
      title: "Environmental Deputy Director", org: "Department of Minerals and Energy, South Africa",
      text: "Oversight of platinum mines of the Bushveld complex: financial audits of land restoration and calls for tender for the rehabilitation of derelict mines." },

    // ---- Education ----
    { id: "mines", type: "education", lat: 48.8455, lng: 2.3397, when: "2001",
      title: "Mastère Spécialisé en Administration des Mines", org: "Mines Paris, PSL",
      text: "Mineral resources, industry and society, after five years of mine regulation in South Africa." },
    { id: "wits", type: "education", lat: -26.1929, lng: 28.0305, when: "1990 to 1996",
      title: "BSc and BSc Honours, Botany", org: "University of the Witwatersrand, Johannesburg",
      text: "Plant biology; honours research on somatic embryogenesis of cassava." },
    { id: "portshepstone", type: "education", lat: -30.741, lng: 30.455, when: "Where I grew up",
      title: "Port Shepstone", org: "KwaZulu-Natal, South Africa",
      text: "On the coast south of Durban." }
  ];

  var LABELS = { now: "Now", experience: "Experience", education: "Education", volunteer: "Volunteering and mentoring" };

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function popupHtml(p) {
    return '<div class="pop-when">' + esc(LABELS[p.type]) + " · " + esc(p.when) + "</div>" +
      '<div class="pop-title">' + esc(p.title) + "</div>" +
      '<div class="pop-org">' + esc(p.org) + "</div>" +
      "<p>" + esc(p.text) + "</p>";
  }

  function init() {
    var el = document.getElementById("career-map");
    if (!el || el.dataset.ready || typeof L === "undefined") return;
    el.dataset.ready = "1";

    var map = L.map(el, { scrollWheelZoom: false, worldCopyJump: true });
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var markers = {};
    var groups = { now: L.featureGroup(), experience: L.featureGroup(), education: L.featureGroup(), volunteer: L.featureGroup() };

    PLACES.forEach(function (p) {
      var cls = p.type === "now" ? "home" : (p.type === "volunteer" ? "volunteer" : p.type);
      var icon = L.divIcon({ className: "", html: '<div class="career-pin ' + cls + '"></div>', iconSize: [16, 16], iconAnchor: [8, 8], popupAnchor: [0, -8] });
      var m = L.marker([p.lat, p.lng], { icon: icon, title: p.org, keyboard: true }).bindPopup(popupHtml(p), { maxWidth: 280 });
      m.addTo(groups[p.type]);
      markers[p.id] = { marker: m, type: p.type };
    });

    Object.keys(groups).forEach(function (k) { groups[k].addTo(map); });

    function visibleBounds() {
      var b = L.latLngBounds([]);
      Object.keys(groups).forEach(function (k) { if (map.hasLayer(groups[k])) b.extend(groups[k].getBounds()); });
      return b;
    }
    map.fitBounds(visibleBounds(), { padding: [30, 30] });

    // Filter buttons
    var buttons = document.querySelectorAll(".map-controls button[data-filter]");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var f = btn.dataset.filter;
        buttons.forEach(function (b) { b.setAttribute("aria-pressed", b === btn ? "true" : "false"); });
        Object.keys(groups).forEach(function (k) {
          if (f === "all" || f === k) map.addLayer(groups[k]); else map.removeLayer(groups[k]);
        });
        var b = visibleBounds();
        if (b.isValid()) map.flyToBounds(b, { padding: [30, 30], maxZoom: 9, duration: 0.8 });
      });
    });

    // "Show on map" links in the timelines
    document.querySelectorAll("[data-place]").forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        var hit = markers[a.dataset.place];
        if (!hit) return;
        var g = groups[hit.type];
        if (!map.hasLayer(g)) map.addLayer(g);
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        map.flyTo(hit.marker.getLatLng(), 10, { duration: 0.8 });
        map.once("moveend", function () { hit.marker.openPopup(); });
      });
    });
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(init);
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();
