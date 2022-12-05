<?php $__env->startSection('content'); ?>
    <header
        class="masthead"
        style="background-image: url( <?php echo e(asset('assets/img/home-bg.jpg')); ?>)"
    >
        <div class="container position-relative px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <div class="site-heading">
                        <h1>Clean Blog</h1>
                        <span class="subheading">A Blog Theme by Start Bootstrap</span>
                    </div>
                </div>
            </div>
        </div>
    </header>


    <div class="container">

        <div class="col-md-10 mx-auto my-5">

            <div class="card shadow">
                <div class="card-body">

                    <div class="text-end">
                        <a href="<?php echo e(route('posts.create')); ?>" class="btn btn-primary btn-sm py-3">
                            <i class="fa fa-plus"></i>
                            Create Post
                        </a>
                    </div>

                    <table class="table table-stripe">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Slug</th>
                                <th>Body</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            <?php $__empty_1 = true; $__currentLoopData = $posts; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $post): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                                <tr>
                                    <td><?php echo e($post->image); ?></td>
                                    <td><?php echo e($post->title); ?></td>
                                    <td><?php echo e($post->slug); ?></td>
                                    <td><?php echo e($post->body); ?></td>
                                    <td><?php echo e($post->created_at); ?></td>
                                    <td>
                                        --
                                    </td>
                                </tr>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                            <tr>
                                <td colspan="6" class="text-center text-muted"> No posts found </td>
                            </tr>
                            <?php endif; ?>
                        </tbody>


                    </table>

                </div>
            </div>

        </div>

    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /Users/kodes/projects/laravel-app/resources/views/posts/index.blade.php ENDPATH**/ ?>