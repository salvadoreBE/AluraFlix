export const extractVideoId = (url: string): string => {
    // Intentar coincidir con el formato https://www.youtube.com/watch?v=VIDEO_ID
    const idMatch1 = url.match(/[?&]v=([^&]+)/);

    // Intentar coincidir con el formato https://youtu.be/VIDEO_ID
    const idMatch2 = url.match(/youtu\.be\/([^?&]+)/);

    return idMatch1 ? idMatch1[1] : idMatch2 ? idMatch2[1] : "";
};


export const truncateText = (text: string, maxLength: number ): string => {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + '...';
    }
    
    return text;
};