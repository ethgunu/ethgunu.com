	#define PI 3.141592653589793
    #define TAU 6.283185307

    uniform sampler2D image;
    uniform vec2 imageSize;
    uniform vec2 resolution;
    uniform float radius;
    uniform float slices;
    uniform float maxSize;
    uniform float seperation;

    vec2 polarToCartesian( float angle, float r ) {
        return vec2(
            r * cos( angle ),
            r * sin( angle )
        );
    }

    vec3 drawCircle( vec2 center ) {

        vec2 positionFromCenter = gl_FragCoord.xy - center;
        float distancePercent = length( positionFromCenter ) / radius;

        distancePercent = min( distancePercent, 1.0 );

        float piece = 1.0 / slices;

        vec2 positionDirection = normalize( positionFromCenter );

        float angle = atan( positionDirection.y, positionDirection.x );
        float anglePercent = ( 1.0 + ( angle / PI ) ) / 2.0;

        float leftover = mod( anglePercent, piece );
        float sectionPercent = leftover / piece;

        float index = floor( anglePercent / piece );

        if ( mod( index, 2.0 ) == 0.0 ) {
            sectionPercent = 1.0 - sectionPercent;
            leftover = piece - leftover;
        }

        vec2 uv = polarToCartesian( leftover * TAU, distancePercent * radius );

        uv /= vec2( radius, maxSize );

        vec2 triangleBox = vec2( radius, maxSize );
        vec2 imageBox = imageSize;

        vec2 scaleVector = triangleBox / imageBox;
        float scale = max( scaleVector.x, scaleVector.y );

        vec2 scaleBox = imageSize * scale;
        vec2 startingPoints = scaleBox / 2.0 - triangleBox / 2.0;

        vec2 coord = startingPoints + uv * triangleBox;

        uv = coord / scaleBox;

        return texture2D( image, uv ).rgb;
    }


    void main() {
        
        vec2 center = resolution / 2.0;

        vec2 upperLeft = center - vec2( seperation );
        vec2 upperRight = center + vec2( seperation, - seperation );
        vec2 lowerRight = center + vec2( seperation );
        vec2 lowerLeft = center + vec2( - seperation, seperation );

        vec2 xy = gl_FragCoord.xy;

        float centerDistance = distance( xy, center );
        float upperLeftDistance = distance( xy, upperLeft );
        float upperRightDistance = distance( xy, upperRight );
        float lowerRightDistance = distance( xy, lowerRight );
        float lowerLeftDistance = distance( xy, lowerLeft );

        vec2 points[ 5 ];
        points[ 0 ] = center;
        points[ 1 ] = upperLeft;
        points[ 2 ] = upperRight;
        points[ 3 ] = lowerRight;
        points[ 4 ] = lowerLeft;

        float distances[ 5 ];
        distances[ 0 ] = centerDistance;
        distances[ 1 ] = upperLeftDistance;
        distances[ 2 ] = upperRightDistance;
        distances[ 3 ] = lowerRightDistance;
        distances[ 4 ] = lowerLeftDistance;

        float smallest = max( resolution.x, resolution.y );
        vec3 pixel;

        for ( int i = 0; i < 5; i++ ) {
            if ( distances[ i ] < smallest ) {
                smallest = distances[ i ];
                gl_FragColor = vec4( drawCircle( points[ i ] ), 1.0 );
            }
        }
    }