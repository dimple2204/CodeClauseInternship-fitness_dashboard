document.addEventListener('DOMContentLoaded', function() {
    const activities = [
        { type: 'running', duration: 30, calories: 300 },
        { type: 'cycling', duration: 45, calories: 400 },
    
    ];

    function calculateTotalDistance(activities) {
        let totalDistance = activities.reduce((total, activity) => {
            if (activity.type === 'running') {
                return total + (activity.duration * 0.1); 
            } else if (activity.type === 'cycling') {
                return total + (activity.duration * 0.2); 
            }
            return total;
        }, 0);
        return totalDistance.toFixed(1); 
    }

    function calculateTotalCalories(activities) {
        let totalCalories = activities.reduce((total, activity) => total + activity.calories, 0);
        return totalCalories;
    }

    function updateDashboardStatistics(activities) {
        const totalDistanceElement = document.getElementById('totalDistance');
        const caloriesBurnedElement = document.getElementById('caloriesBurned');

        const totalDistance = calculateTotalDistance(activities);
        const totalCalories = calculateTotalCalories(activities);

        totalDistanceElement.textContent = `${totalDistance} km`;
        caloriesBurnedElement.textContent = `${totalCalories} kcal`;
    }

    
    updateDashboardStatistics(activities);

    
    var ctx = document.getElementById('activityChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: activities.map(activity => activity.type),
            datasets: [{
                label: 'Activities',
                data: activities.map(activity => activity.duration),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const profileForm = document.getElementById('profileForm');
    profileForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const age = parseInt(document.getElementById('age').value);
        const gender = document.getElementById('gender').value;
        const goal = document.getElementById('goal').value;

        alert(`Profile updated:\nUsername: ${username}\nAge: ${age}\nGender: ${gender}\nGoal: ${goal}`);
    });

    
    var ctx2 = document.getElementById('progressChart').getContext('2d');
    var progressChart = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Progress',
                data: [10, 20, 15, 25], 
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

});
