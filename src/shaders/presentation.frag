uniform float uTime;
uniform vec2 uResolution;
varying vec2 vUv;


uniform float fOpacity;
uniform float fIntensity;
uniform float fScale;
uniform float fSpeed;
uniform float fThreshold;


#include <noise>
#include <utils>

void main() {

    float i = 0.0;

    float ratio = uResolution.x / uResolution.y;
    float x = ratio > 1.0 ? vUv.x : vUv.x * ratio;
    float y = ratio < 1.0 ? vUv.y : vUv.y / ratio;

    float sx = (x - 0.5) / fScale;
    float sy = (y - 0.5) / fScale;

    float st = uTime * 0.4 * fSpeed;

    float scale1 = 6.0;
    float timeScale1 = 0.35;

    float scale2 = 7.8;
    float timeScale2 = 0.45;

    float scale3 = 13.1;
    float timeScale3 = 0.55;

    float col1 = 1.0 * remap(fbm(vec3(sx * scale1, sy * scale1, st * timeScale1)), -1.0, 1.0, 0.0, 1.0);
    float col2 = 0.25 * remap(fbm(vec3(sx * scale2, sy * scale2, st * timeScale2)), -1.0, 1.0, 0.0, 1.0);
    float col3 = 0.7 * remap(fbm(vec3(sx * scale3, sy * scale3, st * timeScale3)), -1.0, 1.0, 0.0, 1.0);

    vec3 color1 = col1 * vec3(1.0, 1.0, 1.0);
    vec3 color2 = col2 * vec3(0.15, 1.0, 0.85);
    vec3 color3 = col3 * vec3(0.0, 0.0, 1.0);

    vec3 frontColor = color1 + color2 + color3;

    vec3 color = fIntensity * frontColor;

    float maxComponent = max(color.r, max(color.g, color.b));
    float meanComponent = (color.r + color.g + color.b) / 2.2;

    float opacity = fOpacity * (meanComponent >= fThreshold ? 1.0 : 0.0);
    gl_FragColor = vec4(color, opacity);
}
