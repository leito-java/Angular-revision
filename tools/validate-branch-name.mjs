const branchName = process.argv[2];
const rejectMain = process.argv.includes('--reject-main');
const allowedBranch = /^(build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test)\/[a-z0-9]+(?:-[a-z0-9]+)*$/;

if (!branchName) {
  console.error('Le nom de la branche est obligatoire.');
  process.exit(1);
}

if (branchName === 'main') {
  if (rejectMain) {
    console.error('Les commits directs sur main sont interdits. Créez une branche dédiée.');
    process.exit(1);
  }

  console.log('Branche main acceptée pour la vérification après fusion.');
  process.exit(0);
}

if (branchName.startsWith('dependabot/')) {
  console.log(`Branche automatisée acceptée : ${branchName}`);
  process.exit(0);
}

if (!allowedBranch.test(branchName)) {
  console.error(`Nom de branche invalide : ${branchName}`);
  console.error('Format attendu : type/description-courte (ex. feat/angular-routing).');
  process.exit(1);
}

console.log(`Nom de branche valide : ${branchName}`);
