document.addEventListener('DOMContentLoaded', function() {
    
    // Actionable elements
    const dateField = document.getElementById('date');
    const releaseField = document.getElementById('release');
    const applyFilterButton = document.getElementById('applyFilters');
    const clearFilterButton = document.getElementById('clearFilters');

    // Variable 
    const image = document.getElementById('images');

    dateField.addEventListener('change', function() {
        console.log('Date changed');
    });

    releaseField.addEventListener('change', function() {
        console.log('Release changed');
    });

    applyFilterButton.addEventListener('click', function() {
        // set image
        image.src = "https://stsci-opo.org/STScI-01J859BSAWK4JW8STW12QTAMGF.png";
        console.log('Apply filters');

    });

    //01J858SG43APYWVSXTYCB2NPHJ
    //01J859BSAWK4JW8STW12QTAMGF.png



    clearFilterButton.addEventListener('click', function() {
        console.log('Clear filters');
    });


});
