module.exports = function () {
  return {
    // Variables are NODE_ID and NODE_NAME (only a-z0-9\- other chars are replaced with _)
    'nodeInfos': [
      {
        'name': 'Clientstatistik',
        'href': 'https://grafana.freifunk-suedholstein.de/d/000000001/statistiken?orgId=1&var-nodeid={NODE_ID}',
        'image': 'https://grafana.freifunk-suedholstein.de/render/d-solo/000000001/statistiken?orgId=1&panelId=1&var-nodeid={NODE_ID}&width=650&height=350&from=now-7d&theme=light',
        'title': 'Knoten {NODE_ID} - weiteren Statistiken'
      },
      {
        'name': 'Trafficstatistik',
        'href': 'https://grafana.freifunk-suedholstein.de/d/000000001/statistiken?orgId=1&var-nodeid={NODE_ID}',
        'image': 'https://grafana.freifunk-suedholstein.de/render/d-solo/000000001/statistiken?orgId=1&panelId=2&var-nodeid={NODE_ID}&width=650&height=350&from=now-7d&theme=light',
        'title': 'Knoten {NODE_ID} - weiteren Statistiken'
      },
      {
        'name': 'Airtime 2.4GHz & 5GHz',
        'href': 'https://grafana.freifunk-suedholstein.de/d/000000001/statistiken?orgId=1&var-nodeid={NODE_ID}',
        'image': 'https://grafana.freifunk-suedholstein.de/render/d-solo/000000001/statistiken?orgId=1&panelId=8&var-nodeid={NODE_ID}&width=650&height=350&from=now-7d&theme=light',
        'title': 'Knoten {NODE_ID} - weiteren Statistiken'
      }
    ],
    'globalInfos': [
      {
        'name': 'Statistik',
        'href': 'https://grafana.freifunk-suedholstein.de/d/9mT4Bukmk/globale-statistiken?orgId=1',
        'image': 'https://grafana.freifunk-suedholstein.de/render/d-solo/9mT4Bukmk/globale-statistiken?orgId=1&panelId=2&width=650&height=350&from=now-7d&theme=light',
        'title': 'Knoten und Clients'
      },
      {
        'name': 'Firmware Versionen',
        'href': 'https://grafana.freifunk-suedholstein.de/d/9mT4Bukmk/globale-statistiken?orgId=1',
        'image': 'https://grafana.freifunk-suedholstein.de/render/d-solo/9mT4Bukmk/globale-statistike?orgId=1&panelId=4&width=650&height=350&from=now-15m&theme=light',
        'title': 'Firmware Versionen'
      },
      {
        'name': 'Geräte Verteilung',
        'href': 'https://grafana.freifunk-suedholstein.de/d/9mT4Bukmk/globale-statistiken?orgId=1',
        'image': 'https://grafana.freifunk-suedholstein.de/render/d-solo/9mT4Bukmk/globale-statistike?orgId=1&panelId=6&width=650&height=350&from=now-15m&theme=light',
        'title': 'Geräte Versionen'
      }
    ],
    // Array of data provider are supported
    'dataPath': [
      'https://map.freifunk-suedholstein.de/data/'
    ],
    'siteName': 'Freifunk Südholstein',
    'mapLayers': [
      {
        'name': 'Freifunk Südholstein',
        'url': 'https://tiles.freifunk-suedholstein.de/{z}/{x}/{y}.png',
        'config': {
          'maxZoom': 19,
          'attribution': '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
        }
      },
      {
        'name': 'Esri.WorldImagery',
        'url': '//server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        'config': {
          'maxZoom': 20,
          'attribution': 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        }
      },
    ],
    // Set a visible frame
    'fixedCenter': [
      // Northwest
      [
        53.9286,
        9.3356
      ],
      // Southeast
      [
        53.3743,
        10.7308
      ]
    ],
    'domainNames': [
      {
        'domain': 'ffrz',
        'name': 'Lauenburg'
      },
      {
        'domain': 'ffod',
        'name': 'Stormarn'
      },
      {
       'domain': 'ffsh',
       'name': 'Südholstein'
      }
    ],
    'linkList': [
      {
        'title': 'Homepage',
        'href': 'https://www.freifunk-suedholstein.de'
      },
      {
        'title': 'Impressum',
        'href': 'https://www.freifunk-suedholstein.de/impressum/'
      },
      {
        'title': 'Datenschutz',
        'href': 'https://www.freifunk-suedholstein.de/datenschutz/'
      }
    ]
  };
};
