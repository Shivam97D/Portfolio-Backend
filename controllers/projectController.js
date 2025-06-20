const db = require('../config/firebase');

// Get all projects
exports.getAllProjects = async (req, res) => {
  try {
    const snapshot = await db.collection('projects').get();
    const projects = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch projects: ' + err.message });
  }
};

// Create a new project
exports.createProject = async (req, res) => {
  try {
    const { title, description, img, url, repo } = req.body;

    if (!title || !description || !img) {
      return res.status(400).json({ error: 'Required fields missing (title, description, img).' });
    }

    const docRef = await db.collection('projects').add({
      title,
      description,
      img,
      url: url || '',
      repo: repo || '',
    });

    res.status(201).json({
      id: docRef.id,
      title,
      description,
      img,
      url,
      repo,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add project: ' + error.message });
  }
};

// Update an existing project
exports.updateProject = async (req, res) => {
  const { id } = req.params;
  const { title, description, img, url, repo } = req.body;

  try {
    await db.collection('projects').doc(id).update({
      title,
      description,
      img,
      url: url || '',
      repo: repo || '',
    });

    res.json({ message: 'Project updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update project: ' + error.message });
  }
};

// Delete a project
exports.deleteProject = async (req, res) => {
  const { id } = req.params;

  try {
    await db.collection('projects').doc(id).delete();
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete project: ' + error.message });
  }
};
