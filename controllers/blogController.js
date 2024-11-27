const blog = require('../models/blogModel');

// Create a new blog
exports.createBlog = async (req, res) => {
  
  try {
    const { title, photo, shortDescription, longDescription, category, userName, userPhoto, userEmail } = req.body;

    const newBlog = await blog.create({
      title,
      photo,
      shortDescription,
      longDescription,
      category,
      userName,
      userPhoto,
      userEmail,
    });

    res.status(201).json({message: 'Blog created successfully'});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create blog' });
  }
};

// Fetch all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await blog.findAll({
      where: {
        category: 'garments'
      }
    });
    res.send({status: true, data: blogs});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
};

// update blog
exports.updateBlog = async(req,res) => {
  const id = req.params.id;
  const updatedBlog = req.body;

  try{
    const findBlog = await blog.findByPk(id);
    if(!findBlog){
      return res.send({status: 404, message: 'Blog not found'})
    };

    await findBlog.update(updatedBlog);
    res.send({status: 200, message: 'Blog updated successfully'})
  }
  catch(error){
    console.log(error);
    res.send({message: 'Failed to update'})
  }
};


// delete blog
exports.deleteBlog = async(req, res) => {
  const id = req.params.id;
  if(!id){
    return res.send({message: 'Id required'});
  }
  try{
    const findBlog = await blog.findByPk(id);
    if(!findBlog){
      return res.send({status: false, message: 'Blog not found'});
    }
    await findBlog.destroy();
    res.send({status: true, message: 'Deleted successfully'})
  }
  catch(error){
    console.log(error);
    res.send({status: false, message: 'Failed to delete'})
  }
};
