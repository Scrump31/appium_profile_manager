pipeline {
  agent any

  tools {
    nodejs "node-18.18.0"
  }

  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run wdio.browserstack'
      }
    }
  }
  post {
    always {
      junit 'junit-report/*.xml'
    }
  }

}